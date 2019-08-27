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
	context[@"CGPathGetCurrentPoint"] = ^CGPoint(id arg0) {
		return CGPathGetCurrentPoint(arg0);
	};
	context[@"CGPathRetain"] = ^id(id arg0) {
		return CGPathRetain(arg0);
	};
	context[@"CGPathRelease"] = ^void(id arg0) {
		CGPathRelease(arg0);
	};
	context[@"CGPathIsEmpty"] = ^_Bool(id arg0) {
		return CGPathIsEmpty(arg0);
	};
	context[@"CGPathCreateCopy"] = ^id(id arg0) {
		return CGPathCreateCopy(arg0);
	};
	context[@"CGPathGetPathBoundingBox"] = ^CGRect(id arg0) {
		return CGPathGetPathBoundingBox(arg0);
	};
	context[@"CGPathCreateMutableCopy"] = ^id(id arg0) {
		return CGPathCreateMutableCopy(arg0);
	};
	context[@"CGPathGetTypeID"] = ^CFTypeID() {
		return CGPathGetTypeID();
	};
	context[@"CGPathEqualToPath"] = ^_Bool(id arg0, id arg1) {
		return CGPathEqualToPath(arg0, arg1);
	};
	context[@"CGPathCloseSubpath"] = ^void(id arg0) {
		CGPathCloseSubpath(arg0);
	};
	context[@"CGPathCreateMutable"] = ^id() {
		return CGPathCreateMutable();
	};
	context[@"CGPathGetBoundingBox"] = ^CGRect(id arg0) {
		return CGPathGetBoundingBox(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGLineJoinMiter"] = @0;
	context[@"kCGLineJoinRound"] = @1;
	context[@"kCGLineJoinBevel"] = @2;

	context[@"kCGLineCapButt"] = @0;
	context[@"kCGLineCapRound"] = @1;
	context[@"kCGLineCapSquare"] = @2;

	context[@"kCGPathElementMoveToPoint"] = @0;
	context[@"kCGPathElementAddLineToPoint"] = @1;
	context[@"kCGPathElementAddQuadCurveToPoint"] = @2;
	context[@"kCGPathElementAddCurveToPoint"] = @3;
	context[@"kCGPathElementCloseSubpath"] = @4;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPath_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
