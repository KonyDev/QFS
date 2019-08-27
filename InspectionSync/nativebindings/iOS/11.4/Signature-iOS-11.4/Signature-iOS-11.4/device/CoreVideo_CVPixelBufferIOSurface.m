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
	context[@"CVPixelBufferGetIOSurface"] = ^id(id arg0) {
		return CVPixelBufferGetIOSurface(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVPixelBufferIOSurfaceOpenGLESTextureCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferIOSurfaceOpenGLESTextureCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferIOSurfaceOpenGLESTextureCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey inContext: context];
}
void load_CoreVideo_CVPixelBufferIOSurface_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
