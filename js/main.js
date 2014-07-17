(function() {
  $(document).ready(function() {
    var day = "XXIII"
    var month = "VIII"
    var year = "MMXIV"

    var $textfield = $("#textfield")

    var inputChangeEvents = $textfield.asEventStream("change")
    var inputKeyUpEvents = $textfield.asEventStream("keyup").debounce(1000)

    var textFieldInput = inputKeyUpEvents.merge(inputChangeEvents).map(".target.value.trim").toProperty($textfield.text())

    var evaluatedInputResult = textFieldInput.map(function(input) {
        return eval("(function(val) {" + input.trim() + "})")
    })

    var applied = evaluatedInputResult.map(function(f) {
      try {
        return f(day) + "." + f(month) + "." + f(year)
      } catch(err) {
        return new Bacon.Error(err)
      }
    })

    applied.onError(function(err) {
      console.log("AARGH")
    })

    var $output = $("#out")
    applied.onValue(function(value) {
      $output.text(value)
    })
    //applied.skipErrors().assign($output, "text")
  })
})()