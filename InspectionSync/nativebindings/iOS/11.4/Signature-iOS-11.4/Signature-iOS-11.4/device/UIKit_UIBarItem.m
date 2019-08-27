#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIBarItem (Exports)
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
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
+(id) jsappearanceWhenContainedIn: (JSValue *) ContainerClass arguments: (NSArray *) args 
{
	Class ContainerClass_ = objc_getClass([[ContainerClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	id resultVal__;
	if ([args count] == 0) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , nil];
	else if ([args count] == 1) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 2) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 3) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 4) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 5) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 6) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 7) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 8) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 9) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] >= 10) resultVal__ = [self appearanceWhenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[9][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	return resultVal__;
}
+(id) jsappearanceForTraitCollection: (UITraitCollection *) trait whenContainedIn: (JSValue *) ContainerClass arguments: (NSArray *) args 
{
	Class ContainerClass_ = objc_getClass([[ContainerClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	id resultVal__;
	if ([args count] == 0) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , nil];
	else if ([args count] == 1) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 2) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 3) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 4) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 5) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 6) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 7) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 8) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] == 9) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	else if ([args count] >= 10) resultVal__ = [self appearanceForTraitCollection: trait whenContainedIn: ContainerClass_ , objc_getClass([[args[0][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[1][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[2][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[3][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[4][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[5][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[6][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[7][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[8][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), objc_getClass([[args[9][@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]), nil];
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UIBarItem class], @protocol(UIBarItemInstanceExports));
	class_addProtocol([UIBarItem class], @protocol(UIBarItemClassExports));
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
void load_UIKit_UIBarItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
