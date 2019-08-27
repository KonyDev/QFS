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
	class_addProtocol([EAGLContext class], @protocol(EAGLContextEAGLContextDrawableAdditionsCategoryInstanceExports));
	class_addProtocol([EAGLContext class], @protocol(EAGLContextEAGLContextDrawableAdditionsCategoryClassExports));
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
	p = (void*) &kEAGLColorFormatRGBA8;
	if (p != NULL) context[@"kEAGLColorFormatRGBA8"] = kEAGLColorFormatRGBA8;
	p = (void*) &kEAGLColorFormatSRGBA8;
	if (p != NULL) context[@"kEAGLColorFormatSRGBA8"] = kEAGLColorFormatSRGBA8;
	p = (void*) &kEAGLColorFormatRGB565;
	if (p != NULL) context[@"kEAGLColorFormatRGB565"] = kEAGLColorFormatRGB565;
	p = (void*) &kEAGLDrawablePropertyRetainedBacking;
	if (p != NULL) context[@"kEAGLDrawablePropertyRetainedBacking"] = kEAGLDrawablePropertyRetainedBacking;
	p = (void*) &kEAGLDrawablePropertyColorFormat;
	if (p != NULL) context[@"kEAGLDrawablePropertyColorFormat"] = kEAGLDrawablePropertyColorFormat;
}
void OpenGLES_EAGLDrawableProtocols()
{
	(void)@protocol(EAGLDrawable);
}
void load_OpenGLES_EAGLDrawable_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
