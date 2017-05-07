<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="AngularApp._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        Welcome to ASP.NET!
    </h2>
        <div ng-app="angularApp" ng-controller="userCtrl" ng-init="getMasterData();" >
        

        <div ui-handsontable minsparerows='1'  datarows="data in datas"  columns="columns"   >
        
            <%--<datacolumn value="item.id" title="'ID'"></datacolumn>
            <datacolumn type="grayedOut" value="data.name.first" title="'First Name'" readonly></datacolumn>
            <datacolumn type="grayedOut" value="data.name.last" title="'Last Name'" readonly></datacolumn>
            <datacolumn value="data.address" title="'Address'"></datacolumn>
            <datacolumn value="data.Product.Description" title="'Favorite food'" type="'autocomplete'"
                live strict>
   <optionlist datarows="option in data.Product.Options"
                clickrow="data.Product.Description = option.Description">
      <img src="{{option.Image}}" style="width: 16px; height: 16px; border-width: 0">
      {{option.Description}}
    </optionlist>
  </datacolumn>
            <datacolumn type="'checkbox'" value="data.isActive" title="'Is active'" checkedtemplate="'Yes'"
                uncheckedtemplate="'No'"></datacolumn>--%>
        </div>
    </div>
</asp:Content>
