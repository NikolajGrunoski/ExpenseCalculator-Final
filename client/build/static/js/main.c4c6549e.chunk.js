(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){},47:function(e,t,a){e.exports=a(85)},72:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),o=a(5),s=a(6),i=a(9),u=a(7),d=a(10),p=a(4),m=a.n(p),h=a(3),E=a(23),f=a(44),g=a.n(f),b=a(18),y={products:[],tableUpdated:!1,totalPrice:"",productToEdit:"",editProductClicked:"",expensesClicked:!1,userName:""};var v=Object(E.c)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object(b.a)({},e,{products:t.payload});case"EDIT_PRODUCT":return Object(b.a)({},e,{productToEdit:t.product});case"EDIT_PRODUCT_CLICKED":return Object(b.a)({},e,{editProductClicked:t.editProductClicked});case"EXPENSES_CLICKED":return Object(b.a)({},e,{expensesClicked:t.expensesClicked});case"DELETE_PRODUCT":return Object(b.a)({},e,{products:e.products.filter((function(e){return e._id!==t.payload}))});case"GET_TOTAL_PRICE":return Object(b.a)({},e,{totalPrice:t.payload});case"TABLE_UPDATED":return Object(b.a)({},e,{tableUpdated:t.tableUpdated});case"SAVE_USER_NAME":return Object(b.a)({},e,{userName:t.userName});default:return e}}}),N=Object(E.d)(v,Object(E.a)(g.a));console.log(N.getState());var P=N,C=a(8),O=function(e){return{type:"GET_PRODUCTS",payload:e}},S=function(e){return{type:"GET_TOTAL_PRICE",payload:e}},k=function(e,t){return{type:"EDIT_PRODUCT",product:e,editProductClicked:t}},j=function(e){return{type:"EDIT_PRODUCT_CLICKED",editProductClicked:e}},w=function(e){return{type:"EXPENSES_CLICKED",expensesClicked:e}},T=function(e){return{type:"TABLE_UPDATED",tableUpdated:e}},x=(a(72),a(73),a(25)),D=a(22),_=(a(78),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).deleteProduct=function(e){m.a.delete("/app/v1/products/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){console.log(t),P.dispatch({type:"DELETE_PRODUCT",payload:e}),a.setState({showModal:null})})).catch((function(e){console.log(e)}))},a.showAlert=function(e){a.setState({showModal:c.a.createElement("div",{className:"main-alert"},c.a.createElement("div",{className:"footer"}),c.a.createElement("div",{className:"alert-box"},c.a.createElement("p",{className:"p-header"},"Delete Product"),c.a.createElement("p",null,"You are about to delete this product. Are you sure you wish to continue? "),c.a.createElement("div",{className:"alert-buttons"},c.a.createElement("button",{onClick:function(){return a.setState({showModal:null})},className:"cancel-button",id:"close"},"CANCEL"),c.a.createElement("button",{onClick:function(){return a.deleteProduct(e)},className:"delete-button"},"DELETE"))))})},a.editProduct=function(e){var t=!a.state.editProductClicked;P.dispatch(k(e)),P.dispatch(j(t))},a.state={editProductClicked:!1,showModal:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.products&&(t=this.props.products.map((function(t){return c.a.createElement("tr",{key:t._id},c.a.createElement("td",null,t.name),c.a.createElement("td",null,t.type),c.a.createElement("td",null,t.description),c.a.createElement("td",null,t.date.toString().slice(0,10)),c.a.createElement("td",null,t.price),e.props.showProducts?c.a.createElement("td",null,c.a.createElement(h.b,{to:"/edit-product"},c.a.createElement("button",{className:"btn-secondary",title:"Edit this product",id:"edit",onClick:function(){return e.editProduct(t)}},c.a.createElement(x.a,{icon:D.a}))),c.a.createElement("button",{className:"btn-danger",title:"Delete this product",id:"delete",onClick:function(){return e.showAlert(t._id)}},c.a.createElement(x.a,{icon:D.c}))):null)}))),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table-container"},this.state.showModal,c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Product Name"),c.a.createElement("th",null,"Product Type"),c.a.createElement("th",null,"Product Description"),c.a.createElement("th",null,"Purchase Date"),c.a.createElement("th",null,"Product Price"))),c.a.createElement("tbody",null,t))))}}]),t}(c.a.Component));var I=Object(C.b)((function(e){return{products:e.productReducer.products,editProductClicked:e.productReducer.editProductClicked}}))(_),A=function(e){return c.a.createElement("div",{className:"main-alert"},c.a.createElement("div",{className:"footer"}),c.a.createElement("div",{className:"alert-box"},c.a.createElement("p",{className:"p-header"},"You are signing out"),c.a.createElement("p",null,"You are about to sign out. Are you sure ?"),c.a.createElement("div",{className:"alert-buttons"},c.a.createElement("button",{className:"cancel-button",id:"close",onClick:e.hide},"CANCEL"),c.a.createElement("button",{className:"delete-button",onClick:e.signOutAccepted},"SIGN OUT"))))},U=function(e){return{type:"SAVE_USER_NAME",userName:e}},F=a(20),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).expensesClicked=function(){P.dispatch(w(!a.state.expensesClicked))},a.productsClicked=function(){P.dispatch(w(a.state.expensesClicked))},a.signOutClicked=function(){a.setState({signOutClicked:!0})},a.hideSignOut=function(){a.setState({signOutClicked:!1})},a.signOutAccepted=function(){localStorage.clear(),localStorage.removeItem("jwt"),a.setState({signOut:!0})},a.state={expensesClicked:!1,signOut:!1,signOutClicked:!1,name:a.props.userName},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("first_name")+" "+localStorage.getItem("last_name");this.setState({name:e}),this.props.saveUserName(e)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,localStorage.getItem("jwt")?null:c.a.createElement(F.a,{to:"/"}),c.a.createElement("header",null,c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:"buttons"},c.a.createElement(h.c,{to:"/products",className:"btn-links",onClick:this.productsClicked}," Products"),c.a.createElement(h.c,{to:"/expences",className:"btn-links",onClick:this.expensesClicked}," Expenses")),c.a.createElement("div",{className:"right-side"},c.a.createElement("p",{id:"name-p"},this.state.name),c.a.createElement("p",{className:"sign-out"},c.a.createElement(h.b,{to:"#",onClick:this.signOutClicked},"Sign Out"))))),this.state.signOutClicked?c.a.createElement(A,{hide:this.hideSignOut,signOutAccepted:this.signOutAccepted}):null)}}]),t}(c.a.Component);var M=Object(C.b)((function(e){return{userName:e.productReducer.userName}}),(function(e){return{saveUserName:function(t){return e(U(t))}}}))(R),L=(a(80),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).filterHandler=function(e){a.setState({didUpdate:!0,filterOption:e.target.value}),console.log(e.target.value)},a.newProductHandler=function(){a.setState({clicked:!0}),P.dispatch(j(a.state.clicked)),a.props.editProduct(a.state.product)},a.state={filterOption:null,didUpdate:!1,showProducts:!0,clicked:!1,product:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.products&&m.a.get("/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){P.dispatch(O(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){!0===this.state.didUpdate&&(null==this.state.filterOption?(m.a.get("/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){P.dispatch(O(e.data)),P.dispatch(T(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1})):null!==this.state.filterOption&&(m.a.get("/app/v1/products/?sort=".concat(this.state.filterOption),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){P.dispatch(O(e.data)),P.dispatch(T(!1))})).catch((function(e){console.log(e)})),this.setState({didUpdate:!1,filterOption:null})))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,null),c.a.createElement("div",{className:"main-select-div"},c.a.createElement("div",{className:"select-div-h"},c.a.createElement("h1",null,"Products"),c.a.createElement("label",{htmlFor:"sort"},"Filter by:",c.a.createElement("select",{name:"filterOption",id:"sort",onChange:this.filterHandler},c.a.createElement("option",{value:"date:desc"},"Last Purchase"),c.a.createElement("option",{value:"date:asc"},"First Purchase"),c.a.createElement("option",{value:"price:desc"},"Highest Price"),c.a.createElement("option",{value:"price:asc"},"Lowest Price")))),c.a.createElement(I,{showProducts:this.state.showProducts})),c.a.createElement(h.b,{to:"/newproduct"},c.a.createElement("button",{id:"new-btn",onClick:this.newProductHandler},"NEW PRODUCT")))}}]),t}(c.a.Component));var B=Object(C.b)((function(e){return{products:e.productReducer.products,tableUpdated:e.productReducer.tableUpdated}}),(function(e){return{getTotalPrice:function(t){return e(S(t))},editProduct:function(t){return e(k(t))}}}))(L),z=a(19),V=(a(81),a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(z.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return c.a.createElement(F.a,{to:"/products"})},a.logIn=function(e){e.preventDefault(),m.a.post("/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",e.data.first_name),localStorage.setItem("last_name",e.data.last_name),a.setState({isAuthenticated:!0,error:!1});var t=localStorage.getItem("first_name")+" "+localStorage.getItem("last_name");a.props.saveUserName(t)})).catch((function(e){a.setState({error:!0}),console.log(e)}))},a.state={email:"",password:"",isAuthenticated:!1,error:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.redirectToMain(),c.a.createElement("div",{id:"login"},c.a.createElement("div",{className:"box-container"},c.a.createElement("form",{action:"",className:"form-box"},c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"E-mail"),c.a.createElement("input",{type:"text",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"Password"),c.a.createElement("input",{type:"password",className:"text-field"})),c.a.createElement(h.b,{to:"/products"},c.a.createElement("button",{className:"primary-button long"},"Sing in")))),c.a.createElement("div",{className:"additional-info"},c.a.createElement("p",null,"Or if you don't have and account,",c.a.createElement(h.b,{to:"/register"}," Register")))))}}]),t}(c.a.Component));var H=Object(C.b)((function(e){return{userName:e.productReducer.userName}}),(function(e){return{saveUserName:function(t){return e(U(t))}}}))(V),Y=(a(82),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).saveInputValue=function(e){a.setState(Object(z.a)({},e.target.id,e.target.value))},a.redirectToMain=function(){if(a.state.isAuthenticated)return c.a.createElement(F.a,{to:"/products"})},a.registerUser=function(e){null===a.state.first_name||null===a.state.last_name||null===a.state.email||null===a.state.date_of_birth||null===a.state.telephone||null===a.state.country||null===a.state.password?(e.preventDefault(),alert("Please fill in the required fields:")):null==a.state.first_name&&null==a.state.last_name&&null==a.state.email&&null==a.state.date_of_birth&&null==a.state.telephone&&null==a.state.country&&null==a.state.password||(e.preventDefault(),m.a.post("/app/v1/auth/register",{first_name:a.state.first_name,last_name:a.state.last_name,email:a.state.email,date_of_birth:a.state.date_of_birth,telephone:a.state.telephone,country:a.state.country,password:a.state.password,_created:new Date}).then((function(e){setTimeout((function(){m.a.post("/app/v1/auth/login",{email:a.state.email,password:a.state.password}).then((function(e){localStorage.setItem("jwt",e.data.jwt),localStorage.setItem("first_name",a.state.first_name),localStorage.setItem("last_name",a.state.last_name),a.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)}))}),1e3)})).catch((function(e){console.log(e)})))},a.state={first_name:null,last_name:null,email:null,date_of_birth:null,telephone:null,country:null,password:null,isAuthenticated:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.redirectToMain(),c.a.createElement("div",{id:"register"},c.a.createElement("div",{className:"box-container-register"},c.a.createElement("form",{action:"",className:"form-box"},c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"First Name"),c.a.createElement("input",{type:"text",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"Last Name"),c.a.createElement("input",{type:"text",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"E-mail"),c.a.createElement("input",{type:"text",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"Date of Birth"),c.a.createElement("input",{type:"text",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"Telephone"),c.a.createElement("input",{type:"number",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"Country"),c.a.createElement("input",{type:"text",className:"text-field"})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{htmlFor:"",className:"text-field-input"},"Password"),c.a.createElement("input",{type:"password",className:"text-field"})),c.a.createElement("button",{className:"primary-button long"},"Register"))),c.a.createElement("div",{className:"additional-info"},c.a.createElement("p",null,"Or if you already have and account,",c.a.createElement(h.b,{to:"/"},"Sing in")))))}}]),t}(c.a.Component)),G=(a(83),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).yearlySelect=function(){a.setState({monthlyDisplay:!1,yearlyDisplay:!0,active:!1,yearlySelected:"all",monthlySelected:null})},a.monthlySelect=function(){a.setState({yearlyDisplay:!1,monthlyDisplay:!0,active:!0,monthlySelected:"months",yearlySelected:null})},a.yearlySelectHandler=function(e){a.setState({yearlySelected:e.target.value})},a.monthlySelectHandler=function(e){a.setState({monthlySelected:e.target.value})},a.state={monthlyDisplay:!1,yearlyDisplay:!0,active:!1,monthlySelected:null,yearlySelected:null},a.year=(new Date).getFullYear()-20,a.years=Array.from(new Array(21),(function(e,t){return t+a.year})),a.months=["January","February","March","April","May","June","July","August","September","October","November","December"],a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){P.dispatch(O(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a),console.log("didMount")})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){var e=this;if("all"===this.state.yearlySelected)m.a.get("/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){P.dispatch(O(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){console.log(e)}));else if(null==this.state.yearlySelected||4!==this.state.yearlySelected.length||this.state.monthlyDisplay){if("months"===this.state.monthlySelected)m.a.get("/app/v1/products/?sort=date:desc",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){P.dispatch(O(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){console.log(e)}));else if(null!=this.state.monthlySelected&&null!=this.state.yearlySelected&&this.state.monthlyDisplay){var t;console.log("Vleze");for(var a=0;a<this.months.length;a++)this.state.monthlySelected===this.months[a]&&(t=a+1,1===a.toString().length&&(t="0"+t.toString()));console.log(t+"Month is");var n=new Date("".concat(this.state.yearlySelected,"-").concat(t,"-01 00:00:00.000")).getTime();console.log(t+"Month is");var c=new Date("".concat(this.state.yearlySelected,"-").concat(t,"-31 23:59:59.000")).getTime();console.log(n+" "+c),console.log(t+"Month is"),m.a.get("/app/v1/products/?date_from=".concat(n,"&date_to=").concat(c),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){P.dispatch(O(t.data));for(var a=0,l=0;l<t.data.length;l++)a+=parseInt(t.data[l].price);e.props.getTotalPrice(a),console.log(n+" "+c)})).catch((function(e){return console.log(e)}))}}else{var l=new Date("".concat(this.state.yearlySelected,"-01-01 00:00:00.000")).getTime(),r=new Date("".concat(this.state.yearlySelected,"-12-31 23:59:59.000")).getTime();console.log(l+" "+r),m.a.get("/app/v1/products/?date_from=".concat(l,"&date_to=").concat(r),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){P.dispatch(O(t.data));for(var a=0,n=0;n<t.data.length;n++)a+=parseInt(t.data[n].price);e.props.getTotalPrice(a)})).catch((function(e){return console.log(e)}))}}},{key:"render",value:function(){var e=c.a.createElement("select",{name:"year-select",className:"month-select",onChange:this.yearlySelectHandler},c.a.createElement("option",{defaultChecked:!0,value:"all"}," ALL"),this.years.map((function(e,t){return c.a.createElement("option",{key:"year".concat(t),value:e},e)}))),t=c.a.createElement("select",{name:"month-select",className:"month-select select-box",onChange:this.monthlySelectHandler},c.a.createElement("option",{defaultChecked:!0,value:"months"},"Month"),this.months.map((function(e,t){return c.a.createElement("option",{key:"month".concat(t),value:e},e)}))),a=c.a.createElement("div",{className:"yearMonthly-div"},t,e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,null),c.a.createElement("h3",{id:"expenses-h3"},"Expenses"),c.a.createElement("div",{className:"expenses-div"},c.a.createElement(h.b,{to:"#"},c.a.createElement("button",{className:this.state.active?"select-btn":"active-btn select-btn",onClick:this.yearlySelect},"Yearly")),c.a.createElement(h.b,{to:"#"},c.a.createElement("button",{className:this.state.active?"active-btn select-btn":"select-btn",onClick:this.monthlySelect},"Monthly")),c.a.createElement("div",{className:"select-div"},this.state.monthlyDisplay?c.a.createElement("label",{htmlFor:"month-select"},"Choose month :"):c.a.createElement("label",{htmlFor:"year-select"},"Choose year:"),this.state.monthlyDisplay?a:e)),c.a.createElement(I,null),c.a.createElement("div",{className:"transparent-div"},c.a.createElement("p",null,"Total spent:",c.a.createElement("span",null,this.props.totalPrice)," den.")))}}]),t}(c.a.Component));var J=Object(C.b)((function(e){return{totalPrice:e.productReducer.totalPrice}}),(function(e){return{getTotalPrice:function(t){return e(S(t))}}}))(G),K=(a(84),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).saveProduct=function(e){a.setState(Object(z.a)({},e.target.id,e.target.value))},a.addNewProduct=function(e){""===a.state.name||""===a.state.description||""===a.state.type||""===a.state.date||""===a.state.price?(e.preventDefault(),alert("Please fill in the required fields:")):""===a.state.name&&""===a.state.description&&""===a.state.type&&""===a.state.date&&""===a.state.price||m.a.post("/app/v1/products/",{name:a.state.name,description:a.state.description,type:a.state.type,date:a.state.date,price:a.state.price,_created:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.editProduct=function(e){""===a.state.name||""===a.state.type||""===a.state.description||""===a.state.date||""===a.state.price?(alert("Please fill in the required fields:"),e.preventDefault()):(P.dispatch(T(!a.state.tableUpdated)),m.a.put("/app/v1/products/".concat(a.props.productToEdit._id),{name:a.state.name,type:a.state.type,description:a.state.description,date:a.state.date,price:a.state.price,_modified:new Date},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})))},a.state={name:a.props.editProductClicked?a.props.productToEdit.name:"",type:a.props.editProductClicked?a.props.productToEdit.type:"",description:a.props.editProductClicked?a.props.productToEdit.description:"",date:a.props.editProductClicked?a.props.productToEdit.date:"",price:a.props.editProductClicked?a.props.productToEdit.price:"",tableUpdated:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,null),this.props.editProductClicked?c.a.createElement("h1",{id:"new-products-h3"},"Edit Product"):c.a.createElement("h1",{id:"new-products-h3"},"New Product"),c.a.createElement("div",{className:"new-container"},c.a.createElement("div",{className:"first-container"},c.a.createElement("div",{id:"new-product"},c.a.createElement("form",null,c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input",htmlFor:"name"},"Product Name"),c.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.name:"",type:"text",name:"name",className:"text-field",id:"name",onChange:this.saveProduct})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input",htmlFor:"description"},"Product Description"),c.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.description:"",type:"text",name:"description",className:"text-field",id:"description",onChange:this.saveProduct})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input",htmlFor:"type"},"Product Type"),c.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.type:"",type:"text",name:"type",className:"text-field",id:"type",onChange:this.saveProduct})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input",htmlFor:"date"},"Purchase Date"),c.a.createElement("input",{defaultValue:this.props.editProductClicked?this.props.productToEdit.date.toString().slice(0,10):"",type:"date",name:"date",className:"text-field",id:"date",onChange:this.saveProduct})),c.a.createElement("p",{className:"input-container"},c.a.createElement("label",{className:"text-field-input",htmlFor:"price"},"Product Price"),c.a.createElement("input",{defaultValue:this.props.editProductClicked?Number(this.props.productToEdit.price):"",type:"text",name:"price",className:"text-field",id:"price",onChange:this.saveProduct})),c.a.createElement(h.b,{to:"/products"},this.props.editProductClicked?c.a.createElement("button",{onClick:this.editProduct,id:"primary-button",className:"primary-button",type:"submit"},"EDIT PRODUCT"):c.a.createElement("button",{onClick:this.addNewProduct,className:"primary-button",type:"submit"},"CREATE PRODUCT"))))),c.a.createElement("div",{className:"second-container"},c.a.createElement("div",{className:"products-add"},c.a.createElement(x.a,{icon:D.b,style:{color:"#8D8D8D"},size:"3x"}),this.props.editProductClicked?c.a.createElement("p",null,"You are editing a product"):c.a.createElement("p",null,"You are creating a new product")))))}}]),t}(c.a.Component));var q=Object(C.b)((function(e){return{productToEdit:e.productReducer.productToEdit,editProductClicked:e.productReducer.editProductClicked,tableUpdated:e.productReducer.tableUpdated}}))(K),X=document.getElementById("root");r.a.render(c.a.createElement(C.a,{store:P},c.a.createElement((function(){return c.a.createElement(h.a,null,c.a.createElement(F.d,null,c.a.createElement(F.b,{exact:!0,path:"/",component:H}),c.a.createElement(F.b,{exact:!0,path:"/register",component:Y}),c.a.createElement(F.b,{exact:!0,path:"/newproduct",render:function(){return c.a.createElement(q,null)}}),c.a.createElement(F.b,{exact:!0,path:"/products",render:function(){return c.a.createElement(B,null)}}),c.a.createElement(F.b,{exact:!0,path:"/edit-product",render:function(){return c.a.createElement(q,null)}}),c.a.createElement(F.b,{exact:!0,path:"/expences",render:function(){return c.a.createElement(J,null)}})))}),null)),X)}},[[47,1,2]]]);
//# sourceMappingURL=main.c4c6549e.chunk.js.map