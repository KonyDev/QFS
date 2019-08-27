#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CIImage (Exports)
-(id) jsinitWithCVImageBuffer: (id) imageBuffer options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithCVImageBuffer: imageBuffer options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithTexture: (unsigned int) name size: (CGSize) size flipped: (BOOL) flipped colorSpace: (id) colorSpace 
{
	id resultVal__;
	resultVal__ = [[self initWithTexture: name size: size flipped: flipped colorSpace: colorSpace ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGImage: (id) image options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithCGImage: image options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithData: (NSData *) data 
{
	id resultVal__;
	resultVal__ = [[self initWithData: data ] autorelease];
	return resultVal__;
}
-(id) jsinitWithBitmapData: (NSData *) data bytesPerRow: (size_t) bytesPerRow size: (CGSize) size format: (CIFormat) format colorSpace: (id) colorSpace 
{
	id resultVal__;
	resultVal__ = [[self initWithBitmapData: data bytesPerRow: bytesPerRow size: size format: format colorSpace: colorSpace ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCVPixelBuffer: (id) pixelBuffer options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithCVPixelBuffer: pixelBuffer options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithData: (NSData *) data options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithData: data options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCVImageBuffer: (id) imageBuffer 
{
	id resultVal__;
	resultVal__ = [[self initWithCVImageBuffer: imageBuffer ] autorelease];
	return resultVal__;
}
-(id) jsinitWithMTLTexture: (id) texture options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithMTLTexture: texture options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithContentsOfURL: (NSURL *) url options: (NSDictionary *) options 
{
	id resultVal__;
	resultVal__ = [[self initWithContentsOfURL: url options: options ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCGImage: (id) image 
{
	id resultVal__;
	resultVal__ = [[self initWithCGImage: image ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCVPixelBuffer: (id) pixelBuffer 
{
	id resultVal__;
	resultVal__ = [[self initWithCVPixelBuffer: pixelBuffer ] autorelease];
	return resultVal__;
}
-(id) jsinitWithContentsOfURL: (NSURL *) url 
{
	id resultVal__;
	resultVal__ = [[self initWithContentsOfURL: url ] autorelease];
	return resultVal__;
}
-(id) jsinitWithColor: (CIColor *) color 
{
	id resultVal__;
	resultVal__ = [[self initWithColor: color ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CIImage class], @protocol(CIImageInstanceExports));
	class_addProtocol([CIImage class], @protocol(CIImageClassExports));
	class_addProtocol([CIImage class], @protocol(CIImageAutoAdjustmentCategoryInstanceExports));
	class_addProtocol([CIImage class], @protocol(CIImageAutoAdjustmentCategoryClassExports));
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
	p = (void*) &kCIFormatL8;
	if (p != NULL) context[@"kCIFormatL8"] = @(kCIFormatL8);
	p = (void*) &kCIFormatRf;
	if (p != NULL) context[@"kCIFormatRf"] = @(kCIFormatRf);
	p = (void*) &kCIFormatLh;
	if (p != NULL) context[@"kCIFormatLh"] = @(kCIFormatLh);
	p = (void*) &kCIFormatR8;
	if (p != NULL) context[@"kCIFormatR8"] = @(kCIFormatR8);
	p = (void*) &kCIFormatLf;
	if (p != NULL) context[@"kCIFormatLf"] = @(kCIFormatLf);
	p = (void*) &kCIFormatLAf;
	if (p != NULL) context[@"kCIFormatLAf"] = @(kCIFormatLAf);
	p = (void*) &kCIFormatLA8;
	if (p != NULL) context[@"kCIFormatLA8"] = @(kCIFormatLA8);
	p = (void*) &kCIImageApplyOrientationProperty;
	if (p != NULL) context[@"kCIImageApplyOrientationProperty"] = kCIImageApplyOrientationProperty;
	p = (void*) &kCIImageAutoAdjustEnhance;
	if (p != NULL) context[@"kCIImageAutoAdjustEnhance"] = kCIImageAutoAdjustEnhance;
	p = (void*) &kCIImageAuxiliaryDisparity;
	if (p != NULL) context[@"kCIImageAuxiliaryDisparity"] = kCIImageAuxiliaryDisparity;
	p = (void*) &kCIFormatRh;
	if (p != NULL) context[@"kCIFormatRh"] = @(kCIFormatRh);
	p = (void*) &kCIFormatLAh;
	if (p != NULL) context[@"kCIFormatLAh"] = @(kCIFormatLAh);
	p = (void*) &kCIFormatR16;
	if (p != NULL) context[@"kCIFormatR16"] = @(kCIFormatR16);
	p = (void*) &kCIImageAutoAdjustFeatures;
	if (p != NULL) context[@"kCIImageAutoAdjustFeatures"] = kCIImageAutoAdjustFeatures;
	p = (void*) &kCIFormatLA16;
	if (p != NULL) context[@"kCIFormatLA16"] = @(kCIFormatLA16);
	p = (void*) &kCIFormatAh;
	if (p != NULL) context[@"kCIFormatAh"] = @(kCIFormatAh);
	p = (void*) &kCIFormatAf;
	if (p != NULL) context[@"kCIFormatAf"] = @(kCIFormatAf);
	p = (void*) &kCIFormatA8;
	if (p != NULL) context[@"kCIFormatA8"] = @(kCIFormatA8);
	p = (void*) &kCIFormatL16;
	if (p != NULL) context[@"kCIFormatL16"] = @(kCIFormatL16);
	p = (void*) &kCIImageProperties;
	if (p != NULL) context[@"kCIImageProperties"] = kCIImageProperties;
	p = (void*) &kCIFormatRGBA16;
	if (p != NULL) context[@"kCIFormatRGBA16"] = @(kCIFormatRGBA16);
	p = (void*) &kCIFormatRGh;
	if (p != NULL) context[@"kCIFormatRGh"] = @(kCIFormatRGh);
	p = (void*) &kCIFormatRG8;
	if (p != NULL) context[@"kCIFormatRG8"] = @(kCIFormatRG8);
	p = (void*) &kCIFormatRGBAh;
	if (p != NULL) context[@"kCIFormatRGBAh"] = @(kCIFormatRGBAh);
	p = (void*) &kCIImageAutoAdjustLevel;
	if (p != NULL) context[@"kCIImageAutoAdjustLevel"] = kCIImageAutoAdjustLevel;
	p = (void*) &kCIFormatRGBAf;
	if (p != NULL) context[@"kCIFormatRGBAf"] = @(kCIFormatRGBAf);
	p = (void*) &kCIImageAuxiliaryDepth;
	if (p != NULL) context[@"kCIImageAuxiliaryDepth"] = kCIImageAuxiliaryDepth;
	p = (void*) &kCIFormatA16;
	if (p != NULL) context[@"kCIFormatA16"] = @(kCIFormatA16);
	p = (void*) &kCIImageColorSpace;
	if (p != NULL) context[@"kCIImageColorSpace"] = kCIImageColorSpace;
	p = (void*) &kCIImageNearestSampling;
	if (p != NULL) context[@"kCIImageNearestSampling"] = kCIImageNearestSampling;
	p = (void*) &kCIImageAutoAdjustRedEye;
	if (p != NULL) context[@"kCIImageAutoAdjustRedEye"] = kCIImageAutoAdjustRedEye;
	p = (void*) &kCIFormatARGB8;
	if (p != NULL) context[@"kCIFormatARGB8"] = @(kCIFormatARGB8);
	p = (void*) &kCIFormatRGf;
	if (p != NULL) context[@"kCIFormatRGf"] = @(kCIFormatRGf);
	p = (void*) &kCIFormatRG16;
	if (p != NULL) context[@"kCIFormatRG16"] = @(kCIFormatRG16);
	p = (void*) &kCIImageAutoAdjustCrop;
	if (p != NULL) context[@"kCIImageAutoAdjustCrop"] = kCIImageAutoAdjustCrop;
	p = (void*) &kCIFormatBGRA8;
	if (p != NULL) context[@"kCIFormatBGRA8"] = @(kCIFormatBGRA8);
	p = (void*) &kCIFormatRGBA8;
	if (p != NULL) context[@"kCIFormatRGBA8"] = @(kCIFormatRGBA8);
	p = (void*) &kCIFormatABGR8;
	if (p != NULL) context[@"kCIFormatABGR8"] = @(kCIFormatABGR8);
}
void load_CoreImage_CIImage_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
