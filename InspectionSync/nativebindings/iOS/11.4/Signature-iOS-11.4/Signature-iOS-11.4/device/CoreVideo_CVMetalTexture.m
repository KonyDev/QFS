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
	context[@"CVMetalTextureGetTypeID"] = ^CFTypeID() {
		return CVMetalTextureGetTypeID();
	};
	context[@"CVMetalTextureIsFlipped"] = ^Boolean(id arg0) {
		return CVMetalTextureIsFlipped(arg0);
	};
	context[@"CVMetalTextureGetTexture"] = ^id(id arg0) {
		return CVMetalTextureGetTexture(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVMetalTextureUsage;
	if (p != NULL) context[@"kCVMetalTextureUsage"] = [JSValue valueWithObject: (__bridge id) kCVMetalTextureUsage inContext: context];
}
void load_CoreVideo_CVMetalTexture_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
