#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPercentDrivenInteractiveTransition (Exports)
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
	class_addProtocol([UIPercentDrivenInteractiveTransition class], @protocol(UIPercentDrivenInteractiveTransitionInstanceExports));
	class_addProtocol([UIPercentDrivenInteractiveTransition class], @protocol(UIPercentDrivenInteractiveTransitionClassExports));
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
	p = (void*) &UITransitionContextToViewKey;
	if (p != NULL) context[@"UITransitionContextToViewKey"] = UITransitionContextToViewKey;
	p = (void*) &UITransitionContextToViewControllerKey;
	if (p != NULL) context[@"UITransitionContextToViewControllerKey"] = UITransitionContextToViewControllerKey;
	p = (void*) &UITransitionContextFromViewControllerKey;
	if (p != NULL) context[@"UITransitionContextFromViewControllerKey"] = UITransitionContextFromViewControllerKey;
	p = (void*) &UITransitionContextFromViewKey;
	if (p != NULL) context[@"UITransitionContextFromViewKey"] = UITransitionContextFromViewKey;
}
void UIKit_UIViewControllerTransitioningProtocols()
{
	(void)@protocol(UIViewControllerTransitioningDelegate);
	(void)@protocol(UIViewControllerInteractiveTransitioning);
	(void)@protocol(UIViewControllerContextTransitioning);
	(void)@protocol(UIViewControllerAnimatedTransitioning);
}
void load_UIKit_UIViewControllerTransitioning_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
