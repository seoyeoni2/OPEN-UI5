sap.ui.define(
    [ "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"],

    function(Controller, JSONModel){
        return Controller.extend("root.controller.profile_list", {

            // 조회버튼 이벤트
            search_profile: function(){
                var v_page = this.byId("page_search").getSelectedItem();
                this._callAjax(v_page);

                // 강사님 코드: this._callAjax(this.byId("p_page").getSelectedItem().getKey());
                
            },

            _callAjax: function(v_page){

                var v_this = this;

                $.ajax({ 
                    url: "https://reqres.in/api/users?page"+v_page, 
                    method: "GET",                                              
                    dataType: "json"                                           
                })

                .done(function(rtnd) {
                    console.log(rtnd)

                    var oData = {
                        list : rtnd.data
                    };

                    var oModel = new JSONModel(oData);
                    v_this.getView().setModel(oModel);
                    
                })
            }
        }
    )}
);