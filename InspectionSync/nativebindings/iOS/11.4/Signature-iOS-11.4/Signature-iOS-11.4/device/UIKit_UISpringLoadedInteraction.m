#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UISpringLoadedInteraction (Exports)
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object ];
	return resultVal__;
}
-(id) jsinitWithActivationHandler: (JSValue *) handler 
{
	void (^ handler_)(UISpringLoadedInteraction * , id ) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void(UISpringLoadedInteraction * arg0, id arg1) {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithActivationHandler: handler_ ] autorelease];
	return resultVal__;
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsinitWithInteractionBehavior: (id) interactionBehavior interactionEffect: (id) interactionEffect activationHandler: (JSValue *) handler 
{
	void (^ handler_)(UISpringLoadedInteraction * , id ) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void(UISpringLoadedInteraction * arg0, id arg1) {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [[self initWithInteractionBehavior: interactionBehavior interactionEffect: interactionEffect activationHandler: handler_ ] autorelease];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UISpringLoadedInteraction class], @protocol(UISpringLoadedInteractionInstanceExports));
	class_addProtocol([UISpringLoadedInteraction class], @protocol(UISpringLoadedInteractionClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UISpringLoadedInteractionEffectStateInactive"] = @0;
	context[@"UISpringLoadedInteractionEffectStatePossible"] = @1;
	context[@"UISpringLoadedInteractionEffectStateActivating"] = @2;
	context[@"UISpringLoadedInteractionEffectStateActivated"] = @3;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UISpringLoadedInteractionProtocols()
{
	(void)@protocol(UISpringLoadedInteractionEffect);
	(void)@protocol(UISpringLoadedInteractionBehavior);
	(void)@protocol(UISpringLoadedInteractionContext);
}
void load_UIKit_UISpringLoadedInteraction_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
