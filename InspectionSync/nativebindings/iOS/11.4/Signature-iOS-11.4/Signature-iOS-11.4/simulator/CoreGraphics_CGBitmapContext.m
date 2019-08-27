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
	context[@"CGBitmapContextGetBitsPerPixel"] = ^size_t(id arg0) {
		return CGBitmapContextGetBitsPerPixel(arg0);
	};
	context[@"CGBitmapContextGetBytesPerRow"] = ^size_t(id arg0) {
		return CGBitmapContextGetBytesPerRow(arg0);
	};
	context[@"CGBitmapContextCreateImage"] = ^id(id arg0) {
		return CGBitmapContextCreateImage(arg0);
	};
	context[@"CGBitmapContextGetAlphaInfo"] = ^CGImageAlphaInfo(id arg0) {
		return CGBitmapContextGetAlphaInfo(arg0);
	};
	context[@"CGBitmapContextGetBitsPerComponent"] = ^size_t(id arg0) {
		return CGBitmapContextGetBitsPerComponent(arg0);
	};
	context[@"CGBitmapContextGetColorSpace"] = ^id(id arg0) {
		return CGBitmapContextGetColorSpace(arg0);
	};
	context[@"CGBitmapContextGetWidth"] = ^size_t(id arg0) {
		return CGBitmapContextGetWidth(arg0);
	};
	context[@"CGBitmapContextGetHeight"] = ^size_t(id arg0) {
		return CGBitmapContextGetHeight(arg0);
	};
	context[@"CGBitmapContextGetBitmapInfo"] = ^CGBitmapInfo(id arg0) {
		return CGBitmapContextGetBitmapInfo(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGBitmapContext_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
