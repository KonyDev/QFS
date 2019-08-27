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
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUIPopoverControllerCategoryInstanceExports));
	class_addProtocol([UIViewController class], @protocol(UIViewControllerUIPopoverControllerCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPopoverArrowDirectionUp"] = @1UL;
	context[@"UIPopoverArrowDirectionDown"] = @2UL;
	context[@"UIPopoverArrowDirectionLeft"] = @4UL;
	context[@"UIPopoverArrowDirectionRight"] = @8UL;
	context[@"UIPopoverArrowDirectionAny"] = @15UL;
	context[@"UIPopoverArrowDirectionUnknown"] = @-1UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIPopoverSupport_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
