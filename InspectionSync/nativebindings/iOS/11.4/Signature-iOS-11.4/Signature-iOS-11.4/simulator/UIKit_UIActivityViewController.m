#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIActivityViewController (Exports)
-(id) jsinitWithActivityItems: (NSArray *) activityItems applicationActivities: (NSArray *) applicationActivities 
{
	id resultVal__;
	resultVal__ = [[self initWithActivityItems: activityItems applicationActivities: applicationActivities ] autorelease];
	return resultVal__;
}
-(JSValue *) getJsCompletionWithItemsHandler
{
	return [JSValue valueWithObject: self.completionWithItemsHandler inContext: [JSContext currentContext]];
}
-(void) setJsCompletionWithItemsHandler: (JSValue *) value
{
	void (^ value_)(UIActivityType , BOOL, NSArray * , NSError * ) = nil;
	if (!value.isUndefined) {
		value_ = ^void(UIActivityType arg0, BOOL arg1, NSArray * arg2, NSError * arg3) {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg3 ? [JSValue valueWithObject: arg3 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, value, self, parameters);
		};
	}
	self.completionWithItemsHandler = value_;
}
-(JSValue *) getJsCompletionHandler
{
	return [JSValue valueWithObject: self.completionHandler inContext: [JSContext currentContext]];
}
-(void) setJsCompletionHandler: (JSValue *) value
{
	void (^ value_)(UIActivityType , BOOL) = nil;
	if (!value.isUndefined) {
		value_ = ^void(UIActivityType arg0, BOOL arg1) {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithObject: @(arg1) inContext: __jsContext]];
			callJSFunction(__jsContext, value, self, parameters);
		};
	}
	self.completionHandler = value_;
}
@end
static void addProtocols()
{
	class_addProtocol([UIActivityViewController class], @protocol(UIActivityViewControllerInstanceExports));
	class_addProtocol([UIActivityViewController class], @protocol(UIActivityViewControllerClassExports));
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
void load_UIKit_UIActivityViewController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
