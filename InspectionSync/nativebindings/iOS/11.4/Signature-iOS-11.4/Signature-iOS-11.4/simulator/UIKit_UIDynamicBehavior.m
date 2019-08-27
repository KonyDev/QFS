#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDynamicItemGroup (Exports)
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
-(id) jsinitWithItems: (NSArray *) items 
{
	id resultVal__;
	resultVal__ = [[self initWithItems: items ] autorelease];
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
@implementation UIDynamicBehavior (Exports)
-(JSValue *) getJsAction
{
	return [JSValue valueWithObject: self.action inContext: [JSContext currentContext]];
}
-(void) setJsAction: (JSValue *) value
{
	void (^ value_)(void) = nil;
	if (!value.isUndefined) {
		value_ = ^void() {
			JSContext* __jsContext = value.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, value, self, parameters);
		};
	}
	self.action = value_;
}
@end
static void addProtocols()
{
	class_addProtocol([UIDynamicItemGroup class], @protocol(UIDynamicItemGroupInstanceExports));
	class_addProtocol([UIDynamicItemGroup class], @protocol(UIDynamicItemGroupClassExports));
	class_addProtocol([UIDynamicBehavior class], @protocol(UIDynamicBehaviorInstanceExports));
	class_addProtocol([UIDynamicBehavior class], @protocol(UIDynamicBehaviorClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIDynamicItemCollisionBoundsTypeRectangle"] = @0UL;
	context[@"UIDynamicItemCollisionBoundsTypeEllipse"] = @1UL;
	context[@"UIDynamicItemCollisionBoundsTypePath"] = @2UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIDynamicBehaviorProtocols()
{
	(void)@protocol(UIDynamicItem);
}
void load_UIKit_UIDynamicBehavior_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
