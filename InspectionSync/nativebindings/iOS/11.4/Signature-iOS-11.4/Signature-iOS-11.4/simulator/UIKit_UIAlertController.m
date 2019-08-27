#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIAlertAction (Exports)
+(id) jsactionWithTitle: (NSString *) title style: (UIAlertActionStyle) style handler: (JSValue *) handler 
{
	void (^ handler_)(UIAlertAction * ) = nil;
	if (!handler.isUndefined) {
		handler_ = ^void(UIAlertAction * arg0) {
			JSContext* __jsContext = handler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, handler, self, parameters);
		};
	}
	id resultVal__;
	resultVal__ = [self actionWithTitle: title style: style handler: handler_ ];
	return resultVal__;
}
@end
@implementation UIAlertController (UIAlertControllerSpringLoadingCategoryExports)
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
@implementation UIAlertController (Exports)
-(void) jsaddTextFieldWithConfigurationHandler: (JSValue *) configurationHandler 
{
	void (^ configurationHandler_)(UITextField * ) = nil;
	if (!configurationHandler.isUndefined) {
		configurationHandler_ = ^void(UITextField * arg0) {
			JSContext* __jsContext = configurationHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, configurationHandler, self, parameters);
		};
	}
	[self addTextFieldWithConfigurationHandler: configurationHandler_ ];
}
@end
static void addProtocols()
{
	class_addProtocol([UIAlertAction class], @protocol(UIAlertActionInstanceExports));
	class_addProtocol([UIAlertAction class], @protocol(UIAlertActionClassExports));
	class_addProtocol([UIAlertController class], @protocol(UIAlertControllerSpringLoadingCategoryInstanceExports));
	class_addProtocol([UIAlertController class], @protocol(UIAlertControllerSpringLoadingCategoryClassExports));
	class_addProtocol([UIAlertController class], @protocol(UIAlertControllerInstanceExports));
	class_addProtocol([UIAlertController class], @protocol(UIAlertControllerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIAlertActionStyleDefault"] = @0L;
	context[@"UIAlertActionStyleCancel"] = @1L;
	context[@"UIAlertActionStyleDestructive"] = @2L;

	context[@"UIAlertControllerStyleActionSheet"] = @0L;
	context[@"UIAlertControllerStyleAlert"] = @1L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIAlertController_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
