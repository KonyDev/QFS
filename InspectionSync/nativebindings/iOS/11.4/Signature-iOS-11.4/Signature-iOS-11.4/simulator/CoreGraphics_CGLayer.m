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
	context[@"CGLayerCreateWithContext"] = ^id(id arg0, CGSize arg1, id arg2) {
		return CGLayerCreateWithContext(arg0, arg1, arg2);
	};
	context[@"CGContextDrawLayerInRect"] = ^void(id arg0, CGRect arg1, id arg2) {
		CGContextDrawLayerInRect(arg0, arg1, arg2);
	};
	context[@"CGLayerGetTypeID"] = ^CFTypeID() {
		return CGLayerGetTypeID();
	};
	context[@"CGLayerRetain"] = ^id(id arg0) {
		return CGLayerRetain(arg0);
	};
	context[@"CGLayerGetSize"] = ^CGSize(id arg0) {
		return CGLayerGetSize(arg0);
	};
	context[@"CGLayerRelease"] = ^void(id arg0) {
		CGLayerRelease(arg0);
	};
	context[@"CGContextDrawLayerAtPoint"] = ^void(id arg0, CGPoint arg1, id arg2) {
		CGContextDrawLayerAtPoint(arg0, arg1, arg2);
	};
	context[@"CGLayerGetContext"] = ^id(id arg0) {
		return CGLayerGetContext(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGLayer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
