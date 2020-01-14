// AMD

sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], 
    function(XMLView){
        "use strict";                       // 꼭 필요하다.

        XMLView.create({
            viewName: "root.view.Calculation"
        })
        .then(function(oView){              // create가 성공이 되면 then으로 넘어감
                                            // oView라고 하는 객체안에 create에 선언한 객체가 html 파일로 변환된 정보들이 들어온다.
            oView.placeAt("C_cnt");         // html 변환된걸 id가 P_cnt 안에다가 inner html 시키겠다는 것
        });                         
    });

    