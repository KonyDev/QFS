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
	class_addProtocol([CAEmitterLayer class], @protocol(CAEmitterLayerInstanceExports));
	class_addProtocol([CAEmitterLayer class], @protocol(CAEmitterLayerClassExports));
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
	p = (void*) &kCAEmitterLayerOutline;
	if (p != NULL) context[@"kCAEmitterLayerOutline"] = kCAEmitterLayerOutline;
	p = (void*) &kCAEmitterLayerSurface;
	if (p != NULL) context[@"kCAEmitterLayerSurface"] = kCAEmitterLayerSurface;
	p = (void*) &kCAEmitterLayerCircle;
	if (p != NULL) context[@"kCAEmitterLayerCircle"] = kCAEmitterLayerCircle;
	p = (void*) &kCAEmitterLayerVolume;
	if (p != NULL) context[@"kCAEmitterLayerVolume"] = kCAEmitterLayerVolume;
	p = (void*) &kCAEmitterLayerAdditive;
	if (p != NULL) context[@"kCAEmitterLayerAdditive"] = kCAEmitterLayerAdditive;
	p = (void*) &kCAEmitterLayerUnordered;
	if (p != NULL) context[@"kCAEmitterLayerUnordered"] = kCAEmitterLayerUnordered;
	p = (void*) &kCAEmitterLayerCuboid;
	if (p != NULL) context[@"kCAEmitterLayerCuboid"] = kCAEmitterLayerCuboid;
	p = (void*) &kCAEmitterLayerSphere;
	if (p != NULL) context[@"kCAEmitterLayerSphere"] = kCAEmitterLayerSphere;
	p = (void*) &kCAEmitterLayerLine;
	if (p != NULL) context[@"kCAEmitterLayerLine"] = kCAEmitterLayerLine;
	p = (void*) &kCAEmitterLayerPoint;
	if (p != NULL) context[@"kCAEmitterLayerPoint"] = kCAEmitterLayerPoint;
	p = (void*) &kCAEmitterLayerRectangle;
	if (p != NULL) context[@"kCAEmitterLayerRectangle"] = kCAEmitterLayerRectangle;
	p = (void*) &kCAEmitterLayerBackToFront;
	if (p != NULL) context[@"kCAEmitterLayerBackToFront"] = kCAEmitterLayerBackToFront;
	p = (void*) &kCAEmitterLayerOldestFirst;
	if (p != NULL) context[@"kCAEmitterLayerOldestFirst"] = kCAEmitterLayerOldestFirst;
	p = (void*) &kCAEmitterLayerOldestLast;
	if (p != NULL) context[@"kCAEmitterLayerOldestLast"] = kCAEmitterLayerOldestLast;
	p = (void*) &kCAEmitterLayerPoints;
	if (p != NULL) context[@"kCAEmitterLayerPoints"] = kCAEmitterLayerPoints;
}
void load_QuartzCore_CAEmitterLayer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
