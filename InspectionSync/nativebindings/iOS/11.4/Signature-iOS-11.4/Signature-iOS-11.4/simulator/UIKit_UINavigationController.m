#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UINavigationController (Exports)
-(id) jsinitWithNavigationBarClass: (JSValue *) navigationBarClass toolbarClass: (JSValue *) toolbarClass 
{
	Class navigationBarClass_ = objc_getClass([[navigationBarClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	Class toolbarClass_ = objc_getClass([[toolbarClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	id resultVal__;
	resultVal__ = [[self initWithNavigationBarClass: navigationBarClass_ toolbarClass: toolbarClass_ ] autorelease];
	return resultVal__;
}
-(id) jsinitWithRootViewController: (UIViewController *) rootViewController 
{
	id resultVal__;
	resultVal__ = [[self initWithRootViewController: rootViewController ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UINavigationController class], @protocol(UINavigationControllerInstanceExports));
	class_addProtocol([UINavigationController class], @protocol(UINavigationControllerClassExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUINavigationControllerItemCategoryInstanceExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUINavigationControllerItemCategoryClassExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUINavigationControllerContextualToolbarItemsCategoryInstanceExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUINavigationControllerContextualToolbarItemsCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UINavigationControllerOperationNone"] = @0L;
	context[@"UINavigationControllerOperationPush"] = @1L;
	context[@"UINavigationControllerOperationPop"] = @2L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UINavigationControllerHideShowBarDuration;
	if (p != NULL) context[@"UINavigationControllerHideShowBarDuration"] = @(UINavigationControllerHideShowBarDuration);
}
void UIKit_UINavigationControllerProtocols()
{
	(void)@protocol(UINavigationControllerDelegate);
}
void load_UIKit_UINavigationController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
