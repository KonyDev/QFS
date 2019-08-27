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
	context[@"CVBufferSetAttachments"] = ^void(id arg0, id arg1, CVAttachmentMode arg2) {
		CVBufferSetAttachments(arg0, arg1, arg2);
	};
	context[@"CVBufferRelease"] = ^void(id arg0) {
		CVBufferRelease(arg0);
	};
	context[@"CVBufferSetAttachment"] = ^void(id arg0, id arg1, id arg2, CVAttachmentMode arg3) {
		CVBufferSetAttachment(arg0, arg1, arg2, arg3);
	};
	context[@"CVBufferRetain"] = ^id(id arg0) {
		return CVBufferRetain(arg0);
	};
	context[@"CVBufferGetAttachments"] = ^id(id arg0, CVAttachmentMode arg1) {
		return CVBufferGetAttachments(arg0, arg1);
	};
	context[@"CVBufferPropagateAttachments"] = ^void(id arg0, id arg1) {
		CVBufferPropagateAttachments(arg0, arg1);
	};
	context[@"CVBufferRemoveAllAttachments"] = ^void(id arg0) {
		CVBufferRemoveAllAttachments(arg0);
	};
	context[@"CVBufferRemoveAttachment"] = ^void(id arg0, id arg1) {
		CVBufferRemoveAttachment(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCVAttachmentMode_ShouldNotPropagate"] = @0U;
	context[@"kCVAttachmentMode_ShouldPropagate"] = @1U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVBufferMovieTimeKey;
	if (p != NULL) context[@"kCVBufferMovieTimeKey"] = [JSValue valueWithObject: (__bridge id) kCVBufferMovieTimeKey inContext: context];
	p = (void*) &kCVBufferPropagatedAttachmentsKey;
	if (p != NULL) context[@"kCVBufferPropagatedAttachmentsKey"] = [JSValue valueWithObject: (__bridge id) kCVBufferPropagatedAttachmentsKey inContext: context];
	p = (void*) &kCVBufferTimeValueKey;
	if (p != NULL) context[@"kCVBufferTimeValueKey"] = [JSValue valueWithObject: (__bridge id) kCVBufferTimeValueKey inContext: context];
	p = (void*) &kCVBufferTimeScaleKey;
	if (p != NULL) context[@"kCVBufferTimeScaleKey"] = [JSValue valueWithObject: (__bridge id) kCVBufferTimeScaleKey inContext: context];
	p = (void*) &kCVBufferNonPropagatedAttachmentsKey;
	if (p != NULL) context[@"kCVBufferNonPropagatedAttachmentsKey"] = [JSValue valueWithObject: (__bridge id) kCVBufferNonPropagatedAttachmentsKey inContext: context];
}
void load_CoreVideo_CVBuffer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
