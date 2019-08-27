#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIScreen (Exports)
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
-(CADisplayLink *) jsdisplayLinkWithTarget: (id) target selector: (NSString *) sel 
{
	SEL sel_ = NSSelectorFromString(sel);
	CADisplayLink * resultVal__;
	resultVal__ = [self displayLinkWithTarget: target selector: sel_ ];
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
	class_addProtocol([UIScreen class], @protocol(UIScreenUISnapshottingCategoryInstanceExports));
	class_addProtocol([UIScreen class], @protocol(UIScreenUISnapshottingCategoryClassExports));
	class_addProtocol([UIScreen class], @protocol(UIScreenInstanceExports));
	class_addProtocol([UIScreen class], @protocol(UIScreenClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIScreenOverscanCompensationScale"] = @0;
	context[@"UIScreenOverscanCompensationInsetBounds"] = @1;
	context[@"UIScreenOverscanCompensationNone"] = @2;
	context[@"UIScreenOverscanCompensationInsetApplicationFrame"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIScreenDidConnectNotification;
	if (p != NULL) context[@"UIScreenDidConnectNotification"] = UIScreenDidConnectNotification;
	p = (void*) &UIScreenModeDidChangeNotification;
	if (p != NULL) context[@"UIScreenModeDidChangeNotification"] = UIScreenModeDidChangeNotification;
	p = (void*) &UIScreenCapturedDidChangeNotification;
	if (p != NULL) context[@"UIScreenCapturedDidChangeNotification"] = UIScreenCapturedDidChangeNotification;
	p = (void*) &UIScreenBrightnessDidChangeNotification;
	if (p != NULL) context[@"UIScreenBrightnessDidChangeNotification"] = UIScreenBrightnessDidChangeNotification;
	p = (void*) &UIScreenDidDisconnectNotification;
	if (p != NULL) context[@"UIScreenDidDisconnectNotification"] = UIScreenDidDisconnectNotification;
}
void load_UIKit_UIScreen_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
