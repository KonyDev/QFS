#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIContext (CIContextImageRepresentationCategoryExports)
-(BOOL) jswritePNGRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr 
{
	NSError* errorPtr_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writePNGRepresentationOfImage: image toURL: url format: format colorSpace: colorSpace options: options error: &errorPtr_ ];
	if (errorPtr_ && [errorPtr isObject]) {
		errorPtr[@"error"] = errorPtr_;
	}
	return resultVal__;
}
-(BOOL) jswriteTIFFRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr 
{
	NSError* errorPtr_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writeTIFFRepresentationOfImage: image toURL: url format: format colorSpace: colorSpace options: options error: &errorPtr_ ];
	if (errorPtr_ && [errorPtr isObject]) {
		errorPtr[@"error"] = errorPtr_;
	}
	return resultVal__;
}
-(BOOL) jswriteHEIFRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url format: (CIFormat) format colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr 
{
	NSError* errorPtr_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writeHEIFRepresentationOfImage: image toURL: url format: format colorSpace: colorSpace options: options error: &errorPtr_ ];
	if (errorPtr_ && [errorPtr isObject]) {
		errorPtr[@"error"] = errorPtr_;
	}
	return resultVal__;
}
-(BOOL) jswriteJPEGRepresentationOfImage: (CIImage *) image toURL: (NSURL *) url colorSpace: (id) colorSpace options: (NSDictionary *) options error: (JSValue *) errorPtr 
{
	NSError* errorPtr_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writeJPEGRepresentationOfImage: image toURL: url colorSpace: colorSpace options: options error: &errorPtr_ ];
	if (errorPtr_ && [errorPtr isObject]) {
		errorPtr[@"error"] = errorPtr_;
	}
	return resultVal__;
}
@end
@implementation CIContext (Exports)
-(id) jsinitWithOptions: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithOptions: options ] autorelease];
	return resultVal__;
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIContext class], @protocol(CIContextImageRepresentationCategoryInstanceExports));
	class_addProtocol([CIContext class], @protocol(CIContextImageRepresentationCategoryClassExports));
	class_addProtocol([CIContext class], @protocol(CIContextInstanceExports));
	class_addProtocol([CIContext class], @protocol(CIContextClassExports));
	class_addProtocol([CIContext class], @protocol(CIContextOfflineGPUSupportCategoryInstanceExports));
	class_addProtocol([CIContext class], @protocol(CIContextOfflineGPUSupportCategoryClassExports));
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
	p = (void*) &kCIContextWorkingColorSpace;
	if (p != NULL) context[@"kCIContextWorkingColorSpace"] = kCIContextWorkingColorSpace;
	p = (void*) &kCIImageRepresentationDisparityImage;
	if (p != NULL) context[@"kCIImageRepresentationDisparityImage"] = kCIImageRepresentationDisparityImage;
	p = (void*) &kCIContextOutputPremultiplied;
	if (p != NULL) context[@"kCIContextOutputPremultiplied"] = kCIContextOutputPremultiplied;
	p = (void*) &kCIContextPriorityRequestLow;
	if (p != NULL) context[@"kCIContextPriorityRequestLow"] = kCIContextPriorityRequestLow;
	p = (void*) &kCIContextUseSoftwareRenderer;
	if (p != NULL) context[@"kCIContextUseSoftwareRenderer"] = kCIContextUseSoftwareRenderer;
	p = (void*) &kCIContextOutputColorSpace;
	if (p != NULL) context[@"kCIContextOutputColorSpace"] = kCIContextOutputColorSpace;
	p = (void*) &kCIContextWorkingFormat;
	if (p != NULL) context[@"kCIContextWorkingFormat"] = kCIContextWorkingFormat;
	p = (void*) &kCIContextHighQualityDownsample;
	if (p != NULL) context[@"kCIContextHighQualityDownsample"] = kCIContextHighQualityDownsample;
	p = (void*) &kCIImageRepresentationAVDepthData;
	if (p != NULL) context[@"kCIImageRepresentationAVDepthData"] = kCIImageRepresentationAVDepthData;
	p = (void*) &kCIImageRepresentationDepthImage;
	if (p != NULL) context[@"kCIImageRepresentationDepthImage"] = kCIImageRepresentationDepthImage;
	p = (void*) &kCIContextCacheIntermediates;
	if (p != NULL) context[@"kCIContextCacheIntermediates"] = kCIContextCacheIntermediates;
}
void load_CoreImage_CIContext_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
