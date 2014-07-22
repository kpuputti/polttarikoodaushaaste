(function() {
  $(document).ready(function() {
    //constants
    var day = "XXIII"
    var month = "VIII"
    var year = "MMXIV"

    //jQuery
    var $codeArea = $("#code")
    var $output = $("#out")
    var $instructionLayer = $("#instructions")
    var $errorIndicator = $("#wat")
    var $winIndicator = $("#win")
    var $helpLink = $("#help")

    //plumbing
    var codeTextArea = Bacon.$.textFieldValue($codeArea, "return val").debounce(1000).map(".trim")
    var evaluatedInputResult = codeTextArea.flatMap(userInputToJavascriptFunction)
    var applied = evaluatedInputResult.flatMap(applyUserFunctionToDateData)

    var errors = evaluatedInputResult.errors().merge(applied.errors())

    applied.log()

    var rightAnswer = applied.filter(function(dateStr) {
      return dateStr === "23.8.2014"
    })

    //side-effects
    applied.skipErrors().onValue(hideErrorIndicator)
    errors.onError(showErrorIndicator)
    rightAnswer.onValue(showWinIndicator)

    applied.assign($output, "text")

    $instructionLayer.find(".dismiss").click(function() {
      $instructionLayer.addClass("hidden")
    })

    $helpLink.click(function(event) {
      event.preventDefault()
      event.stopPropagation()
      $instructionLayer.removeClass("hidden")
    })

    //utils
    function userInputToJavascriptFunction(input) {
      try {
        return eval("(function(val) {" + input.trim() + "})")
      } catch(err) {
        return new Bacon.Error(err)
      }
    }

    function applyUserFunctionToDateData(f) {
      try {
        return f(day) + "." + f(month) + "." + f(year)
      } catch(err) {
        return new Bacon.Error(err)
      }
    }

    function showWinIndicator() {
      $winIndicator.removeClass("hidden")
    }

    function hideErrorIndicator() {
      $errorIndicator.addClass("hidden")
    }

    function showErrorIndicator() {
      $errorIndicator.removeClass("hidden")
      $winIndicator.addClass("hidden")
    }

  })
})()