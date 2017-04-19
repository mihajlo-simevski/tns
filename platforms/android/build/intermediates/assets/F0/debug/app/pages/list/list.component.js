"use strict";
var SocialShare = require("nativescript-social-share");
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.share = function () {
        var list = [];
        for (var i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        var listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdURBQXlEO0FBQ3pELHNDQUF5RTtBQUd6RSxrRkFBK0U7QUFRL0UsSUFBYSxhQUFhO0lBT3hCLHVCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQU4xRCxnQkFBVyxHQUFtQixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUcwQyxDQUFDO0lBQzlELDZCQUFLLEdBQUw7UUFDQSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsMkJBQUcsR0FBSDtRQUFBLGlCQXdCQztRQXZCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN0QyxTQUFTLENBQ1IsVUFBQSxhQUFhO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0wsQ0FBQztJQUNDLGdDQUFRLEdBQVI7UUFBQSxpQkFVRDtRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN4QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxvQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUEvQzhCO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3VEQUFDO0FBTC9DLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FRd0MseUNBQWtCO0dBUC9DLGFBQWEsQ0FvRHpCO0FBcERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9saXN0L2xpc3QuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3QuY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xyXG4gIGdyb2NlcnkgPSBcIlwiO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcclxuQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyeVRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge31cclxuICBzaGFyZSgpIHtcclxuICBsZXQgbGlzdCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwLCBzaXplID0gdGhpcy5ncm9jZXJ5TGlzdC5sZW5ndGg7IGkgPCBzaXplIDsgaSsrKSB7XHJcbiAgICBsaXN0LnB1c2godGhpcy5ncm9jZXJ5TGlzdFtpXS5uYW1lKTtcclxuICB9XHJcbiAgbGV0IGxpc3RTdHJpbmcgPSBsaXN0LmpvaW4oXCIsIFwiKS50cmltKCk7XHJcbiAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3RTdHJpbmcpO1xyXG59XHJcbmFkZCgpIHtcclxuICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgYWxlcnQoXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXHJcbiAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ncm9jZXJ5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuXHJcbiAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSlcclxuICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIGdyb2NlcnlPYmplY3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXHJcbiAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIClcclxufVxyXG4gIG5nT25Jbml0KCkge1xyXG4gIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKClcclxuICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcclxuICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxufSJdfQ==