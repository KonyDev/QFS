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
	context[@"CGDataProviderCreateWithURL"] = ^id(id arg0) {
		return CGDataProviderCreateWithURL(arg0);
	};
	context[@"CGDataProviderRelease"] = ^void(id arg0) {
		CGDataProviderRelease(arg0);
	};
	context[@"CGDataProviderCreateWithCFData"] = ^id(id arg0) {
		return CGDataProviderCreateWithCFData(arg0);
	};
	context[@"CGDataProviderGetTypeID"] = ^CFTypeID() {
		return CGDataProviderGetTypeID();
	};
	context[@"CGDataProviderRetain"] = ^id(id arg0) {
		return CGDataProviderRetain(arg0);
	};
	context[@"CGDataProviderCopyData"] = ^id(id arg0) {
		return CGDataProviderCopyData(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGDataProvider_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
