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
	context[@"CGPDFPageGetPageNumber"] = ^size_t(id arg0) {
		return CGPDFPageGetPageNumber(arg0);
	};
	context[@"CGPDFPageRelease"] = ^void(id arg0) {
		CGPDFPageRelease(arg0);
	};
	context[@"CGPDFPageGetDrawingTransform"] = ^CGAffineTransform(id arg0, CGPDFBox arg1, CGRect arg2, int arg3, _Bool arg4) {
		return CGPDFPageGetDrawingTransform(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CGPDFPageGetTypeID"] = ^CFTypeID() {
		return CGPDFPageGetTypeID();
	};
	context[@"CGPDFPageGetDictionary"] = ^id(id arg0) {
		return CGPDFPageGetDictionary(arg0);
	};
	context[@"CGPDFPageGetRotationAngle"] = ^int(id arg0) {
		return CGPDFPageGetRotationAngle(arg0);
	};
	context[@"CGPDFPageGetDocument"] = ^id(id arg0) {
		return CGPDFPageGetDocument(arg0);
	};
	context[@"CGPDFPageGetBoxRect"] = ^CGRect(id arg0, CGPDFBox arg1) {
		return CGPDFPageGetBoxRect(arg0, arg1);
	};
	context[@"CGPDFPageRetain"] = ^id(id arg0) {
		return CGPDFPageRetain(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGPDFMediaBox"] = @0;
	context[@"kCGPDFCropBox"] = @1;
	context[@"kCGPDFBleedBox"] = @2;
	context[@"kCGPDFTrimBox"] = @3;
	context[@"kCGPDFArtBox"] = @4;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_CoreGraphics_CGPDFPage_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
