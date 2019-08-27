#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([UISplitViewController class], @protocol(UISplitViewControllerInstanceExports));
	class_addProtocol([UISplitViewController class], @protocol(UISplitViewControllerClassExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUISplitViewControllerCategoryInstanceExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUISplitViewControllerCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UISplitViewControllerDisplayModeAutomatic"] = @0L;
	context[@"UISplitViewControllerDisplayModePrimaryHidden"] = @1L;
	context[@"UISplitViewControllerDisplayModeAllVisible"] = @2L;
	context[@"UISplitViewControllerDisplayModePrimaryOverlay"] = @3L;

	context[@"UISplitViewControllerPrimaryEdgeLeading"] = @0L;
	context[@"UISplitViewControllerPrimaryEdgeTrailing"] = @1L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UISplitViewControllerAutomaticDimension;
	if (p != NULL) context[@"UISplitViewControllerAutomaticDimension"] = @(UISplitViewControllerAutomaticDimension);
}
void UIKit_UISplitViewControllerProtocols()
{
	(void)@protocol(UISplitViewControllerDelegate);
}
void load_UIKit_UISplitViewController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
