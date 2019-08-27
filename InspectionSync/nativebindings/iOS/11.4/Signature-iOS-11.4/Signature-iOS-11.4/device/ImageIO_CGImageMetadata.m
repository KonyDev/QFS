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
	context[@"CGImageMetadataCopyTagMatchingImageProperty"] = ^id(id arg0, id arg1, id arg2) {
		return CGImageMetadataCopyTagMatchingImageProperty(arg0, arg1, arg2);
	};
	context[@"CGImageMetadataTagCopyValue"] = ^id(id arg0) {
		return CGImageMetadataTagCopyValue(arg0);
	};
	context[@"CGImageMetadataTagCopyQualifiers"] = ^id(id arg0) {
		return CGImageMetadataTagCopyQualifiers(arg0);
	};
	context[@"CGImageMetadataCopyTags"] = ^id(id arg0) {
		return CGImageMetadataCopyTags(arg0);
	};
	context[@"CGImageMetadataTagCopyName"] = ^id(id arg0) {
		return CGImageMetadataTagCopyName(arg0);
	};
	context[@"CGImageMetadataGetTypeID"] = ^CFTypeID() {
		return CGImageMetadataGetTypeID();
	};
	context[@"CGImageMetadataRemoveTagWithPath"] = ^_Bool(id arg0, id arg1, id arg2) {
		return CGImageMetadataRemoveTagWithPath(arg0, arg1, arg2);
	};
	context[@"CGImageMetadataTagGetTypeID"] = ^CFTypeID() {
		return CGImageMetadataTagGetTypeID();
	};
	context[@"CGImageMetadataTagCreate"] = ^id(id arg0, id arg1, id arg2, CGImageMetadataType arg3, id arg4) {
		return CGImageMetadataTagCreate(arg0, arg1, arg2, arg3, arg4);
	};
	context[@"CGImageMetadataTagGetType"] = ^CGImageMetadataType(id arg0) {
		return CGImageMetadataTagGetType(arg0);
	};
	context[@"CGImageMetadataCopyStringValueWithPath"] = ^id(id arg0, id arg1, id arg2) {
		return CGImageMetadataCopyStringValueWithPath(arg0, arg1, arg2);
	};
	context[@"CGImageMetadataSetValueWithPath"] = ^_Bool(id arg0, id arg1, id arg2, id arg3) {
		return CGImageMetadataSetValueWithPath(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageMetadataCreateFromXMPData"] = ^id(id arg0) {
		return CGImageMetadataCreateFromXMPData(arg0);
	};
	context[@"CGImageMetadataTagCopyNamespace"] = ^id(id arg0) {
		return CGImageMetadataTagCopyNamespace(arg0);
	};
	context[@"CGImageMetadataCreateMutable"] = ^id() {
		return CGImageMetadataCreateMutable();
	};
	context[@"CGImageMetadataCreateXMPData"] = ^id(id arg0, id arg1) {
		return CGImageMetadataCreateXMPData(arg0, arg1);
	};
	context[@"CGImageMetadataCopyTagWithPath"] = ^id(id arg0, id arg1, id arg2) {
		return CGImageMetadataCopyTagWithPath(arg0, arg1, arg2);
	};
	context[@"CGImageMetadataCreateMutableCopy"] = ^id(id arg0) {
		return CGImageMetadataCreateMutableCopy(arg0);
	};
	context[@"CGImageMetadataSetTagWithPath"] = ^_Bool(id arg0, id arg1, id arg2, id arg3) {
		return CGImageMetadataSetTagWithPath(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageMetadataSetValueMatchingImageProperty"] = ^_Bool(id arg0, id arg1, id arg2, id arg3) {
		return CGImageMetadataSetValueMatchingImageProperty(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageMetadataTagCopyPrefix"] = ^id(id arg0) {
		return CGImageMetadataTagCopyPrefix(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGImageMetadataTypeInvalid"] = @-1;
	context[@"kCGImageMetadataTypeDefault"] = @0;
	context[@"kCGImageMetadataTypeString"] = @1;
	context[@"kCGImageMetadataTypeArrayUnordered"] = @2;
	context[@"kCGImageMetadataTypeArrayOrdered"] = @3;
	context[@"kCGImageMetadataTypeAlternateArray"] = @4;
	context[@"kCGImageMetadataTypeAlternateText"] = @5;
	context[@"kCGImageMetadataTypeStructure"] = @6;

	context[@"kCGImageMetadataErrorUnknown"] = @0;
	context[@"kCGImageMetadataErrorUnsupportedFormat"] = @1;
	context[@"kCGImageMetadataErrorBadArgument"] = @2;
	context[@"kCGImageMetadataErrorConflictingArguments"] = @3;
	context[@"kCGImageMetadataErrorPrefixConflict"] = @4;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCGImageMetadataNamespacePhotoshop;
	if (p != NULL) context[@"kCGImageMetadataNamespacePhotoshop"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespacePhotoshop inContext: context];
	p = (void*) &kCGImageMetadataNamespaceDublinCore;
	if (p != NULL) context[@"kCGImageMetadataNamespaceDublinCore"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceDublinCore inContext: context];
	p = (void*) &kCGImageMetadataNamespaceExif;
	if (p != NULL) context[@"kCGImageMetadataNamespaceExif"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceExif inContext: context];
	p = (void*) &kCGImageMetadataNamespaceExifAux;
	if (p != NULL) context[@"kCGImageMetadataNamespaceExifAux"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceExifAux inContext: context];
	p = (void*) &kCGImageMetadataPrefixIPTCExtension;
	if (p != NULL) context[@"kCGImageMetadataPrefixIPTCExtension"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixIPTCExtension inContext: context];
	p = (void*) &kCGImageMetadataNamespaceXMPBasic;
	if (p != NULL) context[@"kCGImageMetadataNamespaceXMPBasic"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceXMPBasic inContext: context];
	p = (void*) &kCGImageMetadataNamespaceExifEX;
	if (p != NULL) context[@"kCGImageMetadataNamespaceExifEX"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceExifEX inContext: context];
	p = (void*) &kCGImageMetadataNamespaceIPTCCore;
	if (p != NULL) context[@"kCGImageMetadataNamespaceIPTCCore"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceIPTCCore inContext: context];
	p = (void*) &kCGImageMetadataNamespaceXMPRights;
	if (p != NULL) context[@"kCGImageMetadataNamespaceXMPRights"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceXMPRights inContext: context];
	p = (void*) &kCGImageMetadataPrefixPhotoshop;
	if (p != NULL) context[@"kCGImageMetadataPrefixPhotoshop"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixPhotoshop inContext: context];
	p = (void*) &kCGImageMetadataNamespaceTIFF;
	if (p != NULL) context[@"kCGImageMetadataNamespaceTIFF"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceTIFF inContext: context];
	p = (void*) &kCGImageMetadataPrefixIPTCCore;
	if (p != NULL) context[@"kCGImageMetadataPrefixIPTCCore"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixIPTCCore inContext: context];
	p = (void*) &kCGImageMetadataPrefixExifAux;
	if (p != NULL) context[@"kCGImageMetadataPrefixExifAux"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixExifAux inContext: context];
	p = (void*) &kCGImageMetadataPrefixXMPBasic;
	if (p != NULL) context[@"kCGImageMetadataPrefixXMPBasic"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixXMPBasic inContext: context];
	p = (void*) &kCGImageMetadataNamespaceIPTCExtension;
	if (p != NULL) context[@"kCGImageMetadataNamespaceIPTCExtension"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataNamespaceIPTCExtension inContext: context];
	p = (void*) &kCGImageMetadataPrefixDublinCore;
	if (p != NULL) context[@"kCGImageMetadataPrefixDublinCore"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixDublinCore inContext: context];
	p = (void*) &kCGImageMetadataPrefixExifEX;
	if (p != NULL) context[@"kCGImageMetadataPrefixExifEX"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixExifEX inContext: context];
	p = (void*) &kCGImageMetadataPrefixExif;
	if (p != NULL) context[@"kCGImageMetadataPrefixExif"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixExif inContext: context];
	p = (void*) &kCGImageMetadataPrefixXMPRights;
	if (p != NULL) context[@"kCGImageMetadataPrefixXMPRights"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixXMPRights inContext: context];
	p = (void*) &kCFErrorDomainCGImageMetadata;
	if (p != NULL) context[@"kCFErrorDomainCGImageMetadata"] = [JSValue valueWithObject: (__bridge id) kCFErrorDomainCGImageMetadata inContext: context];
	p = (void*) &kCGImageMetadataPrefixTIFF;
	if (p != NULL) context[@"kCGImageMetadataPrefixTIFF"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataPrefixTIFF inContext: context];
	p = (void*) &kCGImageMetadataEnumerateRecursively;
	if (p != NULL) context[@"kCGImageMetadataEnumerateRecursively"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataEnumerateRecursively inContext: context];
}
void load_ImageIO_CGImageMetadata_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
