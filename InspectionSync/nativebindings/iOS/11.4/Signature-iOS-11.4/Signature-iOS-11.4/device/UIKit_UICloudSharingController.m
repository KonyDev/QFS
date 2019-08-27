#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UICloudSharingController (Exports)
-(id) jsinitWithShare: (CKShare *) share container: (CKContainer *) container 
{
	id resultVal__;
	resultVal__ = [[self initWithShare: share container: container ] autorelease];
	return resultVal__;
}
-(id) jsinitWithPreparationHandler: (JSValue *) preparationHandler 
{
	void (^ preparationHandler_)(UICloudSharingController * , void (^ preparationHandler_ )(CKShare * , CKContainer * , NSError * )) = nil;
	if (!preparationHandler.isUndefined) {
		preparationHandler_ = ^void(UICloudSharingController * arg0, void (^ arg1)(CKShare * _Nullable, CKContainer * _Nullable, NSError * _Nullable)) {
			JSContext* __jsContext = preparationHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, preparationHandler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithPreparationHandler: preparationHandler_ ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UICloudSharingController class], @protocol(UICloudSharingControllerInstanceExports));
	class_addProtocol([UICloudSharingController class], @protocol(UICloudSharingControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UICloudSharingPermissionStandard"] = @0U;
	context[@"UICloudSharingPermissionAllowPublic"] = @1U;
	context[@"UICloudSharingPermissionAllowPrivate"] = @2U;
	context[@"UICloudSharingPermissionAllowReadOnly"] = @4U;
	context[@"UICloudSharingPermissionAllowReadWrite"] = @8U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UICloudSharingControllerProtocols()
{
	(void)@protocol(UICloudSharingControllerDelegate);
}
void load_UIKit_UICloudSharingController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
