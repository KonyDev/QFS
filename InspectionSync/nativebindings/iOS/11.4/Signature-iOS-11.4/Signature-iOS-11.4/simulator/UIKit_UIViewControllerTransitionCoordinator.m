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
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUIViewControllerTransitionCoordinatorCategoryInstanceExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUIViewControllerTransitionCoordinatorCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIViewControllerTransitionCoordinatorProtocols()
{
	(void)@protocol(UIViewControllerTransitionCoordinatorContext);
	(void)@protocol(UIViewControllerTransitionCoordinator);
}
void load_UIKit_UIViewControllerTransitionCoordinator_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
