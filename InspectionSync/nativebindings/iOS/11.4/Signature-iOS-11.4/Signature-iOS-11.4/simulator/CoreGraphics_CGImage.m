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
	context[@"CGImageIsMask"] = ^_Bool(id arg0) {
		return CGImageIsMask(arg0);
	};
	context[@"CGImageGetDataProvider"] = ^id(id arg0) {
		return CGImageGetDataProvider(arg0);
	};
	context[@"CGImageCreateCopyWithColorSpace"] = ^id(id arg0, id arg1) {
		return CGImageCreateCopyWithColorSpace(arg0, arg1);
	};
	context[@"CGImageGetWidth"] = ^size_t(id arg0) {
		return CGImageGetWidth(arg0);
	};
	context[@"CGImageGetBitmapInfo"] = ^CGBitmapInfo(id arg0) {
		return CGImageGetBitmapInfo(arg0);
	};
	context[@"CGImageGetAlphaInfo"] = ^CGImageAlphaInfo(id arg0) {
		return CGImageGetAlphaInfo(arg0);
	};
	context[@"CGImageGetShouldInterpolate"] = ^_Bool(id arg0) {
		return CGImageGetShouldInterpolate(arg0);
	};
	context[@"CGImageGetRenderingIntent"] = ^CGColorRenderingIntent(id arg0) {
		return CGImageGetRenderingIntent(arg0);
	};
	context[@"CGImageRetain"] = ^id(id arg0) {
		return CGImageRetain(arg0);
	};
	context[@"CGImageGetBitsPerPixel"] = ^size_t(id arg0) {
		return CGImageGetBitsPerPixel(arg0);
	};
	context[@"CGImageCreateWithMask"] = ^id(id arg0, id arg1) {
		return CGImageCreateWithMask(arg0, arg1);
	};
	context[@"CGImageGetBytesPerRow"] = ^size_t(id arg0) {
		return CGImageGetBytesPerRow(arg0);
	};
	context[@"CGImageGetUTType"] = ^id(id arg0) {
		return CGImageGetUTType(arg0);
	};
	context[@"CGImageGetTypeID"] = ^CFTypeID() {
		return CGImageGetTypeID();
	};
	context[@"CGImageCreateCopy"] = ^id(id arg0) {
		return CGImageCreateCopy(arg0);
	};
	context[@"CGImageGetColorSpace"] = ^id(id arg0) {
		return CGImageGetColorSpace(arg0);
	};
	context[@"CGImageGetBitsPerComponent"] = ^size_t(id arg0) {
		return CGImageGetBitsPerComponent(arg0);
	};
	context[@"CGImageRelease"] = ^void(id arg0) {
		CGImageRelease(arg0);
	};
	context[@"CGImageGetHeight"] = ^size_t(id arg0) {
		return CGImageGetHeight(arg0);
	};
	context[@"CGImageCreateWithImageInRect"] = ^id(id arg0, CGRect arg1) {
		return CGImageCreateWithImageInRect(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGImageAlphaNone"] = @0U;
	context[@"kCGImageAlphaPremultipliedLast"] = @1U;
	context[@"kCGImageAlphaPremultipliedFirst"] = @2U;
	context[@"kCGImageAlphaLast"] = @3U;
	context[@"kCGImageAlphaFirst"] = @4U;
	context[@"kCGImageAlphaNoneSkipLast"] = @5U;
	context[@"kCGImageAlphaNoneSkipFirst"] = @6U;
	context[@"kCGImageAlphaOnly"] = @7U;

	context[@"kCGImageByteOrderMask"] = @28672U;
	context[@"kCGImageByteOrderDefault"] = @0U;
	context[@"kCGImageByteOrder16Little"] = @4096U;
	context[@"kCGImageByteOrder32Little"] = @8192U;
	context[@"kCGImageByteOrder16Big"] = @12288U;
	context[@"kCGImageByteOrder32Big"] = @16384U;

	context[@"kCGBitmapAlphaInfoMask"] = @31U;
	context[@"kCGBitmapFloatInfoMask"] = @3840U;
	context[@"kCGBitmapFloatComponents"] = @256U;
	context[@"kCGBitmapByteOrderMask"] = @28672U;
	context[@"kCGBitmapByteOrderDefault"] = @0U;
	context[@"kCGBitmapByteOrder16Little"] = @4096U;
	context[@"kCGBitmapByteOrder32Little"] = @8192U;
	context[@"kCGBitmapByteOrder16Big"] = @12288U;
	context[@"kCGBitmapByteOrder32Big"] = @16384U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGImage_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
