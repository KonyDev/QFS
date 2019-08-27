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
	context[@"CGPDFDocumentIsUnlocked"] = ^_Bool(id arg0) {
		return CGPDFDocumentIsUnlocked(arg0);
	};
	context[@"CGPDFDocumentCreateWithURL"] = ^id(id arg0) {
		return CGPDFDocumentCreateWithURL(arg0);
	};
	context[@"CGPDFDocumentGetTypeID"] = ^CFTypeID() {
		return CGPDFDocumentGetTypeID();
	};
	context[@"CGPDFDocumentAllowsPrinting"] = ^_Bool(id arg0) {
		return CGPDFDocumentAllowsPrinting(arg0);
	};
	context[@"CGPDFDocumentGetInfo"] = ^id(id arg0) {
		return CGPDFDocumentGetInfo(arg0);
	};
	context[@"CGPDFDocumentAllowsCopying"] = ^_Bool(id arg0) {
		return CGPDFDocumentAllowsCopying(arg0);
	};
	context[@"CGPDFDocumentGetAccessPermissions"] = ^CGPDFAccessPermissions(id arg0) {
		return CGPDFDocumentGetAccessPermissions(arg0);
	};
	context[@"CGPDFDocumentGetNumberOfPages"] = ^size_t(id arg0) {
		return CGPDFDocumentGetNumberOfPages(arg0);
	};
	context[@"CGPDFDocumentGetOutline"] = ^id(id arg0) {
		return CGPDFDocumentGetOutline(arg0);
	};
	context[@"CGPDFDocumentRetain"] = ^id(id arg0) {
		return CGPDFDocumentRetain(arg0);
	};
	context[@"CGPDFDocumentCreateWithProvider"] = ^id(id arg0) {
		return CGPDFDocumentCreateWithProvider(arg0);
	};
	context[@"CGPDFDocumentGetID"] = ^id(id arg0) {
		return CGPDFDocumentGetID(arg0);
	};
	context[@"CGPDFDocumentIsEncrypted"] = ^_Bool(id arg0) {
		return CGPDFDocumentIsEncrypted(arg0);
	};
	context[@"CGPDFDocumentGetCatalog"] = ^id(id arg0) {
		return CGPDFDocumentGetCatalog(arg0);
	};
	context[@"CGPDFDocumentGetPage"] = ^id(id arg0, size_t arg1) {
		return CGPDFDocumentGetPage(arg0, arg1);
	};
	context[@"CGPDFDocumentRelease"] = ^void(id arg0) {
		CGPDFDocumentRelease(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGPDFAllowsLowQualityPrinting"] = @1U;
	context[@"kCGPDFAllowsHighQualityPrinting"] = @2U;
	context[@"kCGPDFAllowsDocumentChanges"] = @4U;
	context[@"kCGPDFAllowsDocumentAssembly"] = @8U;
	context[@"kCGPDFAllowsContentCopying"] = @16U;
	context[@"kCGPDFAllowsContentAccessibility"] = @32U;
	context[@"kCGPDFAllowsCommenting"] = @64U;
	context[@"kCGPDFAllowsFormFieldEntry"] = @128U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCGPDFOutlineTitle;
	if (p != NULL) context[@"kCGPDFOutlineTitle"] = [JSValue valueWithObject: (__bridge id) kCGPDFOutlineTitle inContext: context];
	p = (void*) &kCGPDFOutlineChildren;
	if (p != NULL) context[@"kCGPDFOutlineChildren"] = [JSValue valueWithObject: (__bridge id) kCGPDFOutlineChildren inContext: context];
	p = (void*) &kCGPDFOutlineDestination;
	if (p != NULL) context[@"kCGPDFOutlineDestination"] = [JSValue valueWithObject: (__bridge id) kCGPDFOutlineDestination inContext: context];
	p = (void*) &kCGPDFOutlineDestinationRect;
	if (p != NULL) context[@"kCGPDFOutlineDestinationRect"] = [JSValue valueWithObject: (__bridge id) kCGPDFOutlineDestinationRect inContext: context];
}
void load_CoreGraphics_CGPDFDocument_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
