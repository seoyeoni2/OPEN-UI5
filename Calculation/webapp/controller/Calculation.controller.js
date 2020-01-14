sap.ui.define(
    [ "sap/ui/core/mvc/Controller"],

    function(Controller){
        "use.strict";
        return Controller.extend("root.controller.Calculation", {

            en_input: function(all_input){
                var all_input = all_input.oSource.mProperties.text;
                var result_input = this.byId("display").getValue() + all_input;
                console.log(all_input);
                this.byId("display").setValue(result_input);
            },

            view_result: function(all_result){
                var all_result = this.byId("display").getValue(); // all_result = display 화면에 있는 결과
                var final_result = eval(all_result);              // final_result = result 화면에 있는 결과
                this.byId("result").setValue(final_result);       // en_input에 넣은 값을 final_result로 가져오기
                console.log(final_result);
                
            },

            reset: function(input_reset, all_reset, ){
                var input_reset = this.en_input;
                console.log(input_reset);
                input_reset = "";
                this.byId("display").setValue(input_reset);

                var all_reset = this.view_result;
                console.log(all_reset);
                all_reset = "";
                this.byId("result").setValue(all_reset);
            }
            
        })
    }
);