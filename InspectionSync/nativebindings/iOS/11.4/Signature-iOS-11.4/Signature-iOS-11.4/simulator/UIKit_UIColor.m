#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIColor (Exports)
-(UIColor *) jsinitWithPatternImage: (UIImage *) image 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithPatternImage: image ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(UIColor *) jsinitWithDisplayP3Red: (CGFloat) displayP3Red green: (CGFloat) green blue: (CGFloat) blue alpha: (CGFloat) alpha 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithDisplayP3Red: displayP3Red green: green blue: blue alpha: alpha ] autorelease];
	return resultVal__;
}
-(UIColor *) jsinitWithHue: (CGFloat) hue saturation: (CGFloat) saturation brightness: (CGFloat) brightness alpha: (CGFloat) alpha 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithHue: hue saturation: saturation brightness: brightness alpha: alpha ] autorelease];
	return resultVal__;
}
-(UIColor *) jsinitWithRed: (CGFloat) red green: (CGFloat) green blue: (CGFloat) blue alpha: (CGFloat) alpha 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithRed: red green: green blue: blue alpha: alpha ] autorelease];
	return resultVal__;
}
-(UIColor *) jsinitWithCIColor: (CIColor *) ciColor 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithCIColor: ciColor ] autorelease];
	return resultVal__;
}
-(UIColor *) jsinitWithWhite: (CGFloat) white alpha: (CGFloat) alpha 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithWhite: white alpha: alpha ] autorelease];
	return resultVal__;
}
-(UIColor *) jsinitWithCGColor: (id) cgColor 
{
	UIColor * resultVal__;
	resultVal__ = [[self initWithCGColor: cgColor ] autorelease];
	return resultVal__;
}
@end
@implementation UIColor (UIColorUINSItemProviderCategoryExports)
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
-(NSProgress *) jsloadDataWithTypeIdentifier: (NSString *) typeIdentifier forItemProviderCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSData * , NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSData * arg0, NSError * arg1) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	NSProgress * resultVal__;
	resultVal__ = [self loadDataWithTypeIdentifier: typeIdentifier forItemProviderCompletionHandler: completionHandler_ ];
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
+(id) jsobjectWithItemProviderData: (NSData *) data typeIdentifier: (NSString *) typeIdentifier error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	id resultVal__;
	resultVal__ = [self objectWithItemProviderData: data typeIdentifier: typeIdentifier error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
@implementation CIColor (CIColorUIKitAdditionsCategoryExports)
-(id) jsinitWithColor: (UIColor *) color 
{
	id resultVal__;
	resultVal__ = [[self initWithColor: color ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIColor class], @protocol(UIColorInstanceExports));
	class_addProtocol([UIColor class], @protocol(UIColorClassExports));
	class_addProtocol([UIColor class], @protocol(UIColorUINSItemProviderCategoryInstanceExports));
	class_addProtocol([UIColor class], @protocol(UIColorUINSItemProviderCategoryClassExports));
	class_addProtocol([CIColor class], @protocol(CIColorUIKitAdditionsCategoryInstanceExports));
	class_addProtocol([CIColor class], @protocol(CIColorUIKitAdditionsCategoryClassExports));
	class_addProtocol([UIColor class], @protocol(UIColorUIColorNamedColorsCategoryInstanceExports));
	class_addProtocol([UIColor class], @protocol(UIColorUIColorNamedColorsCategoryClassExports));
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
void load_UIKit_UIColor_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
