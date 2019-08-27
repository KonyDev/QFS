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
	context[@"CGImageDestinationCreateWithData"] = ^id(id arg0, id arg1, size_t arg2, id arg3) {
		return CGImageDestinationCreateWithData(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageDestinationSetProperties"] = ^void(id arg0, id arg1) {
		CGImageDestinationSetProperties(arg0, arg1);
	};
	context[@"CGImageDestinationAddImage"] = ^void(id arg0, id arg1, id arg2) {
		CGImageDestinationAddImage(arg0, arg1, arg2);
	};
	context[@"CGImageDestinationAddImageAndMetadata"] = ^void(id arg0, id arg1, id arg2, id arg3) {
		CGImageDestinationAddImageAndMetadata(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageDestinationAddImageFromSource"] = ^void(id arg0, id arg1, size_t arg2, id arg3) {
		CGImageDestinationAddImageFromSource(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageDestinationCreateWithURL"] = ^id(id arg0, id arg1, size_t arg2, id arg3) {
		return CGImageDestinationCreateWithURL(arg0, arg1, arg2, arg3);
	};
	context[@"CGImageDestinationFinalize"] = ^_Bool(id arg0) {
		return CGImageDestinationFinalize(arg0);
	};
	context[@"CGImageDestinationAddAuxiliaryDataInfo"] = ^void(id arg0, id arg1, id arg2) {
		CGImageDestinationAddAuxiliaryDataInfo(arg0, arg1, arg2);
	};
	context[@"CGImageDestinationGetTypeID"] = ^CFTypeID() {
		return CGImageDestinationGetTypeID();
	};
	context[@"CGImageDestinationCopyTypeIdentifiers"] = ^id() {
		return CGImageDestinationCopyTypeIdentifiers();
	};
	context[@"CGImageDestinationCreateWithDataConsumer"] = ^id(id arg0, id arg1, size_t arg2, id arg3) {
		return CGImageDestinationCreateWithDataConsumer(arg0, arg1, arg2, arg3);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCGImageDestinationImageMaxPixelSize;
	if (p != NULL) context[@"kCGImageDestinationImageMaxPixelSize"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationImageMaxPixelSize inContext: context];
	p = (void*) &kCGImageDestinationOrientation;
	if (p != NULL) context[@"kCGImageDestinationOrientation"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationOrientation inContext: context];
	p = (void*) &kCGImageDestinationEmbedThumbnail;
	if (p != NULL) context[@"kCGImageDestinationEmbedThumbnail"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationEmbedThumbnail inContext: context];
	p = (void*) &kCGImageDestinationDateTime;
	if (p != NULL) context[@"kCGImageDestinationDateTime"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationDateTime inContext: context];
	p = (void*) &kCGImageDestinationOptimizeColorForSharing;
	if (p != NULL) context[@"kCGImageDestinationOptimizeColorForSharing"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationOptimizeColorForSharing inContext: context];
	p = (void*) &kCGImageMetadataShouldExcludeGPS;
	if (p != NULL) context[@"kCGImageMetadataShouldExcludeGPS"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataShouldExcludeGPS inContext: context];
	p = (void*) &kCGImageDestinationMetadata;
	if (p != NULL) context[@"kCGImageDestinationMetadata"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationMetadata inContext: context];
	p = (void*) &kCGImageDestinationLossyCompressionQuality;
	if (p != NULL) context[@"kCGImageDestinationLossyCompressionQuality"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationLossyCompressionQuality inContext: context];
	p = (void*) &kCGImageDestinationBackgroundColor;
	if (p != NULL) context[@"kCGImageDestinationBackgroundColor"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationBackgroundColor inContext: context];
	p = (void*) &kCGImageDestinationMergeMetadata;
	if (p != NULL) context[@"kCGImageDestinationMergeMetadata"] = [JSValue valueWithObject: (__bridge id) kCGImageDestinationMergeMetadata inContext: context];
	p = (void*) &kCGImageMetadataShouldExcludeXMP;
	if (p != NULL) context[@"kCGImageMetadataShouldExcludeXMP"] = [JSValue valueWithObject: (__bridge id) kCGImageMetadataShouldExcludeXMP inContext: context];
}
void load_ImageIO_CGImageDestination_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
