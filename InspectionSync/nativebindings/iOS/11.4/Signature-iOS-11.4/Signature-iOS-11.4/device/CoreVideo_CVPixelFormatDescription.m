#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes"] = ^id(id arg0) {
		return CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes(arg0);
	};
	context[@"CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType"] = ^void(id arg0, OSType arg1) {
		CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(arg0, arg1);
	};
	context[@"CVPixelFormatDescriptionCreateWithPixelFormatType"] = ^id(id arg0, OSType arg1) {
		return CVPixelFormatDescriptionCreateWithPixelFormatType(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVPixelFormatPlanes;
	if (p != NULL) context[@"kCVPixelFormatPlanes"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatPlanes inContext: context];
	p = (void*) &kCVPixelFormatCGBitmapInfo;
	if (p != NULL) context[@"kCVPixelFormatCGBitmapInfo"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatCGBitmapInfo inContext: context];
	p = (void*) &kCVPixelFormatOpenGLCompatibility;
	if (p != NULL) context[@"kCVPixelFormatOpenGLCompatibility"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatOpenGLCompatibility inContext: context];
	p = (void*) &kCVPixelFormatOpenGLType;
	if (p != NULL) context[@"kCVPixelFormatOpenGLType"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatOpenGLType inContext: context];
	p = (void*) &kCVPixelFormatBlackBlock;
	if (p != NULL) context[@"kCVPixelFormatBlackBlock"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatBlackBlock inContext: context];
	p = (void*) &kCVPixelFormatConstant;
	if (p != NULL) context[@"kCVPixelFormatConstant"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatConstant inContext: context];
	p = (void*) &kCVPixelFormatComponentRange_FullRange;
	if (p != NULL) context[@"kCVPixelFormatComponentRange_FullRange"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatComponentRange_FullRange inContext: context];
	p = (void*) &kCVPixelFormatQDCompatibility;
	if (p != NULL) context[@"kCVPixelFormatQDCompatibility"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatQDCompatibility inContext: context];
	p = (void*) &kCVPixelFormatBlockHorizontalAlignment;
	if (p != NULL) context[@"kCVPixelFormatBlockHorizontalAlignment"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatBlockHorizontalAlignment inContext: context];
	p = (void*) &kCVPixelFormatContainsRGB;
	if (p != NULL) context[@"kCVPixelFormatContainsRGB"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatContainsRGB inContext: context];
	p = (void*) &kCVPixelFormatBlockWidth;
	if (p != NULL) context[@"kCVPixelFormatBlockWidth"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatBlockWidth inContext: context];
	p = (void*) &kCVPixelFormatName;
	if (p != NULL) context[@"kCVPixelFormatName"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatName inContext: context];
	p = (void*) &kCVPixelFormatContainsYCbCr;
	if (p != NULL) context[@"kCVPixelFormatContainsYCbCr"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatContainsYCbCr inContext: context];
	p = (void*) &kCVPixelFormatOpenGLESCompatibility;
	if (p != NULL) context[@"kCVPixelFormatOpenGLESCompatibility"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatOpenGLESCompatibility inContext: context];
	p = (void*) &kCVPixelFormatBlockVerticalAlignment;
	if (p != NULL) context[@"kCVPixelFormatBlockVerticalAlignment"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatBlockVerticalAlignment inContext: context];
	p = (void*) &kCVPixelFormatVerticalSubsampling;
	if (p != NULL) context[@"kCVPixelFormatVerticalSubsampling"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatVerticalSubsampling inContext: context];
	p = (void*) &kCVPixelFormatCodecType;
	if (p != NULL) context[@"kCVPixelFormatCodecType"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatCodecType inContext: context];
	p = (void*) &kCVPixelFormatCGImageCompatibility;
	if (p != NULL) context[@"kCVPixelFormatCGImageCompatibility"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatCGImageCompatibility inContext: context];
	p = (void*) &kCVPixelFormatFourCC;
	if (p != NULL) context[@"kCVPixelFormatFourCC"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatFourCC inContext: context];
	p = (void*) &kCVPixelFormatComponentRange_VideoRange;
	if (p != NULL) context[@"kCVPixelFormatComponentRange_VideoRange"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatComponentRange_VideoRange inContext: context];
	p = (void*) &kCVPixelFormatOpenGLFormat;
	if (p != NULL) context[@"kCVPixelFormatOpenGLFormat"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatOpenGLFormat inContext: context];
	p = (void*) &kCVPixelFormatFillExtendedPixelsCallback;
	if (p != NULL) context[@"kCVPixelFormatFillExtendedPixelsCallback"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatFillExtendedPixelsCallback inContext: context];
	p = (void*) &kCVPixelFormatBitsPerBlock;
	if (p != NULL) context[@"kCVPixelFormatBitsPerBlock"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatBitsPerBlock inContext: context];
	p = (void*) &kCVPixelFormatComponentRange_WideRange;
	if (p != NULL) context[@"kCVPixelFormatComponentRange_WideRange"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatComponentRange_WideRange inContext: context];
	p = (void*) &kCVPixelFormatComponentRange;
	if (p != NULL) context[@"kCVPixelFormatComponentRange"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatComponentRange inContext: context];
	p = (void*) &kCVPixelFormatOpenGLInternalFormat;
	if (p != NULL) context[@"kCVPixelFormatOpenGLInternalFormat"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatOpenGLInternalFormat inContext: context];
	p = (void*) &kCVPixelFormatBlockHeight;
	if (p != NULL) context[@"kCVPixelFormatBlockHeight"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatBlockHeight inContext: context];
	p = (void*) &kCVPixelFormatHorizontalSubsampling;
	if (p != NULL) context[@"kCVPixelFormatHorizontalSubsampling"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatHorizontalSubsampling inContext: context];
	p = (void*) &kCVPixelFormatCGBitmapContextCompatibility;
	if (p != NULL) context[@"kCVPixelFormatCGBitmapContextCompatibility"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatCGBitmapContextCompatibility inContext: context];
	p = (void*) &kCVPixelFormatContainsAlpha;
	if (p != NULL) context[@"kCVPixelFormatContainsAlpha"] = [JSValue valueWithObject: (__bridge id) kCVPixelFormatContainsAlpha inContext: context];
}
void load_CoreVideo_CVPixelFormatDescription_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
