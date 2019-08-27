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
	context[@"CGImageSourceGetCount"] = ^size_t(id arg0) {
		return CGImageSourceGetCount(arg0);
	};
	context[@"CGImageSourceCreateImageAtIndex"] = ^id(id arg0, size_t arg1, id arg2) {
		return CGImageSourceCreateImageAtIndex(arg0, arg1, arg2);
	};
	context[@"CGImageSourceCopyMetadataAtIndex"] = ^id(id arg0, size_t arg1, id arg2) {
		return CGImageSourceCopyMetadataAtIndex(arg0, arg1, arg2);
	};
	context[@"CGImageSourceUpdateDataProvider"] = ^void(id arg0, id arg1, _Bool arg2) {
		CGImageSourceUpdateDataProvider(arg0, arg1, arg2);
	};
	context[@"CGImageSourceCreateWithURL"] = ^id(id arg0, id arg1) {
		return CGImageSourceCreateWithURL(arg0, arg1);
	};
	context[@"CGImageSourceCopyAuxiliaryDataInfoAtIndex"] = ^id(id arg0, size_t arg1, id arg2) {
		return CGImageSourceCopyAuxiliaryDataInfoAtIndex(arg0, arg1, arg2);
	};
	context[@"CGImageSourceCopyProperties"] = ^id(id arg0, id arg1) {
		return CGImageSourceCopyProperties(arg0, arg1);
	};
	context[@"CGImageSourceCreateWithDataProvider"] = ^id(id arg0, id arg1) {
		return CGImageSourceCreateWithDataProvider(arg0, arg1);
	};
	context[@"CGImageSourceGetStatusAtIndex"] = ^CGImageSourceStatus(id arg0, size_t arg1) {
		return CGImageSourceGetStatusAtIndex(arg0, arg1);
	};
	context[@"CGImageSourceRemoveCacheAtIndex"] = ^void(id arg0, size_t arg1) {
		CGImageSourceRemoveCacheAtIndex(arg0, arg1);
	};
	context[@"CGImageSourceCopyTypeIdentifiers"] = ^id() {
		return CGImageSourceCopyTypeIdentifiers();
	};
	context[@"CGImageSourceCreateThumbnailAtIndex"] = ^id(id arg0, size_t arg1, id arg2) {
		return CGImageSourceCreateThumbnailAtIndex(arg0, arg1, arg2);
	};
	context[@"CGImageSourceCreateWithData"] = ^id(id arg0, id arg1) {
		return CGImageSourceCreateWithData(arg0, arg1);
	};
	context[@"CGImageSourceGetType"] = ^id(id arg0) {
		return CGImageSourceGetType(arg0);
	};
	context[@"CGImageSourceCreateIncremental"] = ^id(id arg0) {
		return CGImageSourceCreateIncremental(arg0);
	};
	context[@"CGImageSourceGetTypeID"] = ^CFTypeID() {
		return CGImageSourceGetTypeID();
	};
	context[@"CGImageSourceUpdateData"] = ^void(id arg0, id arg1, _Bool arg2) {
		CGImageSourceUpdateData(arg0, arg1, arg2);
	};
	context[@"CGImageSourceCopyPropertiesAtIndex"] = ^id(id arg0, size_t arg1, id arg2) {
		return CGImageSourceCopyPropertiesAtIndex(arg0, arg1, arg2);
	};
	context[@"CGImageSourceGetStatus"] = ^CGImageSourceStatus(id arg0) {
		return CGImageSourceGetStatus(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCGImageStatusUnexpectedEOF"] = @-5;
	context[@"kCGImageStatusInvalidData"] = @-4;
	context[@"kCGImageStatusUnknownType"] = @-3;
	context[@"kCGImageStatusReadingHeader"] = @-2;
	context[@"kCGImageStatusIncomplete"] = @-1;
	context[@"kCGImageStatusComplete"] = @0;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCGImageSourceCreateThumbnailFromImageIfAbsent;
	if (p != NULL) context[@"kCGImageSourceCreateThumbnailFromImageIfAbsent"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceCreateThumbnailFromImageIfAbsent inContext: context];
	p = (void*) &kCGImageSourceTypeIdentifierHint;
	if (p != NULL) context[@"kCGImageSourceTypeIdentifierHint"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceTypeIdentifierHint inContext: context];
	p = (void*) &kCGImageSourceThumbnailMaxPixelSize;
	if (p != NULL) context[@"kCGImageSourceThumbnailMaxPixelSize"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceThumbnailMaxPixelSize inContext: context];
	p = (void*) &kCGImageSourceShouldCache;
	if (p != NULL) context[@"kCGImageSourceShouldCache"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceShouldCache inContext: context];
	p = (void*) &kCGImageSourceShouldAllowFloat;
	if (p != NULL) context[@"kCGImageSourceShouldAllowFloat"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceShouldAllowFloat inContext: context];
	p = (void*) &kCGImageSourceCreateThumbnailWithTransform;
	if (p != NULL) context[@"kCGImageSourceCreateThumbnailWithTransform"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceCreateThumbnailWithTransform inContext: context];
	p = (void*) &kCGImageSourceShouldCacheImmediately;
	if (p != NULL) context[@"kCGImageSourceShouldCacheImmediately"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceShouldCacheImmediately inContext: context];
	p = (void*) &kCGImageSourceCreateThumbnailFromImageAlways;
	if (p != NULL) context[@"kCGImageSourceCreateThumbnailFromImageAlways"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceCreateThumbnailFromImageAlways inContext: context];
	p = (void*) &kCGImageSourceSubsampleFactor;
	if (p != NULL) context[@"kCGImageSourceSubsampleFactor"] = [JSValue valueWithObject: (__bridge id) kCGImageSourceSubsampleFactor inContext: context];
}
void load_ImageIO_CGImageSource_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
