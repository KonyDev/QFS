#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIImage (UIImageNSItemProviderCategoryExports)
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
@implementation CIImage (CIImageUIKitAdditionsCategoryExports)
-(id) jsinitWithImage: (UIImage *) image options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithImage: image options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithImage: (UIImage *) image 
{
	id resultVal__;
	resultVal__ = [[self initWithImage: image ] autorelease];
	return resultVal__;
}
@end
@implementation UIImage (Exports)
-(id) jsinitWithCGImage: (id) cgImage scale: (CGFloat) scale orientation: (UIImageOrientation) orientation 
{
	id resultVal__;
	resultVal__ = [[self initWithCGImage: cgImage scale: scale orientation: orientation ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithData: (NSData *) data 
{
	id resultVal__;
	resultVal__ = [[self initWithData: data ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCIImage: (CIImage *) ciImage scale: (CGFloat) scale orientation: (UIImageOrientation) orientation 
{
	id resultVal__;
	resultVal__ = [[self initWithCIImage: ciImage scale: scale orientation: orientation ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCIImage: (CIImage *) ciImage 
{
	id resultVal__;
	resultVal__ = [[self initWithCIImage: ciImage ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGImage: (id) cgImage 
{
	id resultVal__;
	resultVal__ = [[self initWithCGImage: cgImage ] autorelease];
	return resultVal__;
}
-(id) jsinitWithContentsOfFile: (NSString *) path 
{
	id resultVal__;
	resultVal__ = [[self initWithContentsOfFile: path ] autorelease];
	return resultVal__;
}
-(id) jsinitWithData: (NSData *) data scale: (CGFloat) scale 
{
	id resultVal__;
	resultVal__ = [[self initWithData: data scale: scale ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIImage class], @protocol(UIImageUIImageDeprecatedCategoryInstanceExports));
	class_addProtocol([UIImage class], @protocol(UIImageUIImageDeprecatedCategoryClassExports));
	class_addProtocol([UIImage class], @protocol(UIImageNSItemProviderCategoryInstanceExports));
	class_addProtocol([UIImage class], @protocol(UIImageNSItemProviderCategoryClassExports));
	class_addProtocol([CIImage class], @protocol(CIImageUIKitAdditionsCategoryInstanceExports));
	class_addProtocol([CIImage class], @protocol(CIImageUIKitAdditionsCategoryClassExports));
	class_addProtocol([UIImage class], @protocol(UIImageInstanceExports));
	class_addProtocol([UIImage class], @protocol(UIImageClassExports));
}
static void registerCFunctions(JSContext* context)
{
	context[@"UIImageJPEGRepresentation"] = ^NSData *(UIImage * arg0, CGFloat arg1) {
		return UIImageJPEGRepresentation(arg0, arg1);
	};
	context[@"UIImagePNGRepresentation"] = ^NSData *(UIImage * arg0) {
		return UIImagePNGRepresentation(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIImageOrientationUp"] = @0L;
	context[@"UIImageOrientationDown"] = @1L;
	context[@"UIImageOrientationLeft"] = @2L;
	context[@"UIImageOrientationRight"] = @3L;
	context[@"UIImageOrientationUpMirrored"] = @4L;
	context[@"UIImageOrientationDownMirrored"] = @5L;
	context[@"UIImageOrientationLeftMirrored"] = @6L;
	context[@"UIImageOrientationRightMirrored"] = @7L;

	context[@"UIImageResizingModeTile"] = @0L;
	context[@"UIImageResizingModeStretch"] = @1L;

	context[@"UIImageRenderingModeAutomatic"] = @0L;
	context[@"UIImageRenderingModeAlwaysOriginal"] = @1L;
	context[@"UIImageRenderingModeAlwaysTemplate"] = @2L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIImage_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
