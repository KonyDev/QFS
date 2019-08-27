#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPopoverPresentationController (Exports)
-(JSValue *) getJsPopoverBackgroundViewClass
{
	return [JSValue valueWithObject: self.popoverBackgroundViewClass inContext: [JSContext currentContext]];
}
-(void) setJsPopoverBackgroundViewClass: (JSValue *) value
{
	self.popoverBackgroundViewClass = objc_getClass([[value[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
}
@end
static void addProtocols()
{
	class_addProtocol([UIPopoverPresentationController class], @protocol(UIPopoverPresentationControllerInstanceExports));
	class_addProtocol([UIPopoverPresentationController class], @protocol(UIPopoverPresentationControllerClassExports));
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
void UIKit_UIPopoverPresentationControllerProtocols()
{
	(void)@protocol(UIPopoverPresentationControllerDelegate);
}
void load_UIKit_UIPopoverPresentationController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
