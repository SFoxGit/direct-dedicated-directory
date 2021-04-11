(this["webpackJsonpdirect-dedicated-directory"]=this["webpackJsonpdirect-dedicated-directory"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(12),c=a.n(s),o=a(13),i=a(14),l=a(19),h=a(18),d=a(15),j=a(17),u=a(1);var m=function(e){return Object(u.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"Direct Dedicated Directory"}),Object(u.jsx)(j.a,{inline:!0,children:Object(u.jsx)(d.a,{value:e.search,onChange:e.handleSearchSave,type:"text",placeholder:"Search By Name",className:"mr-sm-2"})})]})})},b=a(16);var f=function(e){var t;return t=window.matchMedia("(max-width: 700px)").matches?Object(u.jsx)("i",{style:{fontSize:"36px",justifySelf:"center"},class:"fas fa-envelope-square"}):e.email,Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:t})};var O=function(e){return Object(u.jsx)("a",{href:"tel:".concat(e.phone),children:e.phone})};var p=function(e){var t,a,r,n,s,c=function(e){e.target.style.cursor="pointer"};return"Name"===e.icon&&(t=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-down"})),"NameD"===e.icon&&(t=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-up"})),"Email"===e.icon&&(a=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-down"})),"EmailD"===e.icon&&(a=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-up"})),"ID"===e.icon&&(r=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-down"})),"IDD"===e.icon&&(r=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-up"})),"Phone"===e.icon&&(n=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-down"})),"PhoneD"===e.icon&&(n=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-up"})),"DOB"===e.icon&&(s=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-down"})),"DOBD"===e.icon&&(s=Object(u.jsx)("i",{style:{color:"white"},className:"fas fa-arrow-alt-square-up"})),Object(u.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"sortable",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Image"}),Object(u.jsxs)("th",{onMouseOver:c,onClick:function(){return e.handlePageChange("Name")},children:["Name ",Object(u.jsx)("span",{children:t||Object(u.jsx)("i",{className:"fas fa-sort"})})]}),Object(u.jsxs)("th",{onMouseOver:c,onClick:function(){return e.handlePageChange("Email")},children:["Email ",Object(u.jsx)("span",{children:a||Object(u.jsx)("i",{className:"fas fa-sort"})})]}),Object(u.jsxs)("th",{onMouseOver:c,onClick:function(){return e.handlePageChange("ID")},children:["Employee ID ",Object(u.jsx)("span",{children:r||Object(u.jsx)("i",{className:"fas fa-sort"})})]}),Object(u.jsxs)("th",{onMouseOver:c,onClick:function(){return e.handlePageChange("Phone")},children:["Phone ",Object(u.jsx)("span",{children:n||Object(u.jsx)("i",{className:"fas fa-sort"})})]}),Object(u.jsxs)("th",{onMouseOver:c,onClick:function(){return e.handlePageChange("DOB")},children:["DOB ",Object(u.jsx)("span",{children:s||Object(u.jsx)("i",{className:"fas fa-sort"})})]})]})}),Object(u.jsx)("tbody",{children:e.employees.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[Object(u.jsx)("img",{src:e.picture,alt:"failed to load"})," "]}),Object(u.jsxs)("td",{children:[e.name[0]," ",e.name[1]]}),Object(u.jsx)("td",{children:Object(u.jsx)(f,{email:e.email})}),Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:Object(u.jsx)(O,{phone:e.phone})}),Object(u.jsxs)("td",{children:[new Date(e.dob).getMonth()+1,"/",new Date(e.dob).getDate(),"/",new Date(e.dob).getFullYear()]})]},e.id)}))})]})},x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleSearchSave=function(e){var t=e.target.value;r.setState({search:t}),r.handleSearch(t)},r.handleSearch=function(e){var t=r.state.employees;if(e.length>0){var a=t.filter((function(t){return[t.name[0].toLowerCase(),t.name[1].toLowerCase()].some((function(t){return t.includes(e)}))}));r.setState({searchEmp:a})}else r.setState({searchEmp:t})},r.handlePageChange=function(e){var t,a,n=r.state.searchEmp.length>0?r.state.searchEmp:r.state.employees;if(e!==r.state.prevSort?(t=1,a=-1):(t=-1,a=1),"Name"===e){var s,c=n.sort((function(e,r){var n=e.name[1].toLowerCase(),s=r.name[1].toLowerCase();return n<s?a:s<n?t:null}));s=1===t?"Name":"NameD",r.setState({employees:c,prevSort:s})}if("Email"===e){var o,i=n.sort((function(e,r){var n=e.email.toLowerCase(),s=r.email.toLowerCase();return n<s?a:s<n?t:null}));o=1===t?"Email":"EmailD",r.setState({employees:i,prevSort:o})}if("ID"===e){var l,h=n.sort((function(e,r){var n=e.id,s=r.id;return n<s?a:s<n?t:null}));l=1===t?"ID":"IDD",r.setState({employees:h,prevSort:l})}if("Phone"===e){var d,j=n.sort((function(e,r){var n=e.phone,s=r.phone;return n<s?a:s<n?t:null}));d=1===t?"Phone":"PhoneD",r.setState({employees:j,prevSort:d})}if("DOB"===e){var u,m=n.sort((function(e,r){var n=new Date(e.dob).getFullYear(),s=new Date(r.dob).getFullYear(),c=new Date(e.dob).getMonth(),o=new Date(r.dob).getMonth(),i=new Date(e.dob).getDate(),l=new Date(r.dob).getDate();return n<s?a:s<n?t:c<o?a:o<c?t:i<l?a:l<i?t:null}));u=1===t?"DOB":"DOBD",r.setState({employees:m,prevSort:u})}},r.state={error:null,isLoaded:!1,employees:[],prevSort:"",search:"",searchEmp:[]},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=24&inc=name,email,dob,phone,id,picture&nat=us").then((function(e){return e.json()})).then((function(t){t.results.forEach((function(e){e.name=[e.name.first,e.name.last],e.dob=e.dob.date,e.id=e.id.value,e.picture=e.picture.thumbnail})),e.setState({isLoaded:!0,employees:t.results})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,r=e.employees,n=e.searchEmp;return t?Object(u.jsxs)("div",{children:["Error: ",t.message]}):a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{handleSearchSave:this.handleSearchSave,handleSearch:this.handleSearch}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(p,{icon:this.state.prevSort,handlePageChange:this.handlePageChange,employees:n.length?n:r})})]}):Object(u.jsx)("div",{children:"Loading..."})}}]),a}(r.Component);a(28),a(29);c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.33b44d99.chunk.js.map