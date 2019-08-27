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
	context[@"CVOpenGLESTextureGetTarget"] = ^GLenum(id arg0) {
		return CVOpenGLESTextureGetTarget(arg0);
	};
	context[@"CVOpenGLESTextureGetTypeID"] = ^CFTypeID() {
		return CVOpenGLESTextureGetTypeID();
	};
	context[@"CVOpenGLESTextureIsFlipped"] = ^Boolean(id arg0) {
		return CVOpenGLESTextureIsFlipped(arg0);
	};
	context[@"CVOpenGLESTextureGetName"] = ^GLuint(id arg0) {
		return CVOpenGLESTextureGetName(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreVideo_CVOpenGLESTexture_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
