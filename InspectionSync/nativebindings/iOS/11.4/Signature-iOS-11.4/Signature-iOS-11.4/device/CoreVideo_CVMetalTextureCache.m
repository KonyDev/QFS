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
	context[@"CVMetalTextureCacheGetTypeID"] = ^CFTypeID() {
		return CVMetalTextureCacheGetTypeID();
	};
	context[@"CVMetalTextureCacheFlush"] = ^void(id arg0, CVOptionFlags arg1) {
		CVMetalTextureCacheFlush(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVMetalTextureCacheMaximumTextureAgeKey;
	if (p != NULL) context[@"kCVMetalTextureCacheMaximumTextureAgeKey"] = [JSValue valueWithObject: (__bridge id) kCVMetalTextureCacheMaximumTextureAgeKey inContext: context];
}
void load_CoreVideo_CVMetalTextureCache_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
