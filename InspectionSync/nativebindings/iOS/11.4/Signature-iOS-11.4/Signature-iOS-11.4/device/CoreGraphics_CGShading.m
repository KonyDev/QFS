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
	context[@"CGShadingCreateRadial"] = ^id(id arg0, CGPoint arg1, CGFloat arg2, CGPoint arg3, CGFloat arg4, id arg5, _Bool arg6, _Bool arg7) {
		return CGShadingCreateRadial(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
	};
	context[@"CGShadingRelease"] = ^void(id arg0) {
		CGShadingRelease(arg0);
	};
	context[@"CGShadingRetain"] = ^id(id arg0) {
		return CGShadingRetain(arg0);
	};
	context[@"CGShadingGetTypeID"] = ^CFTypeID() {
		return CGShadingGetTypeID();
	};
	context[@"CGShadingCreateAxial"] = ^id(id arg0, CGPoint arg1, CGPoint arg2, id arg3, _Bool arg4, _Bool arg5) {
		return CGShadingCreateAxial(arg0, arg1, arg2, arg3, arg4, arg5);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGShading_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
