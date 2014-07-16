(defproject inception "0.1.0-SNAPSHOT"
  :description "Clojure task for a bachelor party."
  :url "https://github.com/kpuputti/polttarikoodaushaaste"
  :dependencies [[org.clojure/clojure "1.6.0"]]
  :main ^:skip-aot inception.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
