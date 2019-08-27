#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIContextualAction (Exports)
+(id) jscontextualActionWithStyle: (UIContextualActionStyle) style title: (NSString *) title handler: (JSValue *) handler 
{
	void (^ handler_)(UIContextualAction * , __kindof UIView * , void (^ handler_ )(BOOL)) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void(UIContextualAction * arg0, __kindof UIView * arg1, void (^ arg2)(BOOL)) {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [self contextualActionWithStyle: style title: title handler: handler_ ];
	return resultVal__;
}
-(JSValue *) getJsHandler
{
	return [JSValue valueWithObject: self.handler inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UIContextualAction class], @protocol(UIContextualActionInstanceExports));
	class_addProtocol([UIContextualAction class], @protocol(UIContextualActionClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIContextualActionStyleNormal"] = @0L;
	context[@"UIContextualActionStyleDestructive"] = @1L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIContextualAction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
