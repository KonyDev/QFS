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
	context[@"CGPatternRelease"] = ^void(id arg0) {
		CGPatternRelease(arg0);
	};
	context[@"CGPatternRetain"] = ^id(id arg0) {
		return CGPatternRetain(arg0);
	};
	context[@"CGPatternGetTypeID"] = ^CFTypeID() {
		return CGPatternGetTypeID();
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGPatternTilingNoDistortion"] = @0;
	context[@"kCGPatternTilingConstantSpacingMinimalDistortion"] = @1;
	context[@"kCGPatternTilingConstantSpacing"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPattern_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
