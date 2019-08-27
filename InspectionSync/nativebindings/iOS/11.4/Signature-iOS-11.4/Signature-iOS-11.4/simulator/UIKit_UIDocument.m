#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIDocument (Exports)
-(void) jsperformAsynchronousFileAccessUsingBlock: (JSValue *) block 
{
	void (^ block_)(void) = nil;
	if (!block.isUndefined) {
		block_ = ^void() {
			JSContext* __jsContext = block.context;
			NSMutableArray* parameters = [NSMutableArray array];
			callJSFunction(__jsContext, block, self, parameters);
		};
	}
	[self performAsynchronousFileAccessUsingBlock: block_ ];
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(void) jscloseWithCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(BOOL) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self closeWithCompletionHandler: completionHandler_ ];
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(void) jsaccommodatePresentedItemDeletionWithCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSError * arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self accommodatePresentedItemDeletionWithCompletionHandler: completionHandler_ ];
}
-(void) jsrelinquishPresentedItemToWriter: (JSValue *) writer 
{
	void (^ writer_)(void (^ writer_ )(void)) = nil;
	if (!writer.isUndefined) {
		writer_ = ^void(void (^ arg0)(void)) {
			JSContext* __jsContext = writer.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, writer, self, parameters);
		};
	}
	[self relinquishPresentedItemToWriter: writer_ ];
}
-(void) jsaccommodatePresentedSubitemDeletionAtURL: (NSURL *) url completionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSError * arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self accommodatePresentedSubitemDeletionAtURL: url completionHandler: completionHandler_ ];
}
-(BOOL) jswriteContents: (id) contents toURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation originalContentsURL: (NSURL *) originalContentsURL error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writeContents: contents toURL: url forSaveOperation: saveOperation originalContentsURL: originalContentsURL error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(void) jsrevertToContentsOfURL: (NSURL *) url completionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(BOOL) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self revertToContentsOfURL: url completionHandler: completionHandler_ ];
}
-(void) jssavePresentedItemChangesWithCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSError * arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self savePresentedItemChangesWithCompletionHandler: completionHandler_ ];
}
-(id) jsinitWithFileURL: (NSURL *) url 
{
	id resultVal__;
	resultVal__ = [[self initWithFileURL: url ] autorelease];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
-(NSDictionary *) jsfileAttributesToWriteToURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	NSDictionary * resultVal__;
	resultVal__ = [self fileAttributesToWriteToURL: url forSaveOperation: saveOperation error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(BOOL) jsreadFromURL: (NSURL *) url error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	BOOL resultVal__;
	resultVal__ = [self readFromURL: url error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(void) jssaveToURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation completionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(BOOL) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self saveToURL: url forSaveOperation: saveOperation completionHandler: completionHandler_ ];
}
-(id) jscontentsForType: (NSString *) typeName error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	id resultVal__;
	resultVal__ = [self contentsForType: typeName error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(void) jsautosaveWithCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(BOOL) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self autosaveWithCompletionHandler: completionHandler_ ];
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(BOOL) jsloadFromContents: (id) contents ofType: (NSString *) typeName error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	BOOL resultVal__;
	resultVal__ = [self loadFromContents: contents ofType: typeName error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(void) jsrelinquishPresentedItemToReader: (JSValue *) reader 
{
	void (^ reader_)(void (^ reader_ )(void)) = nil;
	if (!reader.isUndefined) {
		reader_ = ^void(void (^ arg0)(void)) {
			JSContext* __jsContext = reader.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, reader, self, parameters);
		};
	}
	[self relinquishPresentedItemToReader: reader_ ];
}
-(BOOL) jswriteContents: (id) contents andAttributes: (NSDictionary *) additionalFileAttributes safelyToURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	BOOL resultVal__;
	resultVal__ = [self writeContents: contents andAttributes: additionalFileAttributes safelyToURL: url forSaveOperation: saveOperation error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(void) jsopenWithCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(BOOL) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(BOOL arg0) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithObject: @(arg0) inContext: __jsContext]];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	[self openWithCompletionHandler: completionHandler_ ];
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([UIDocument class], @protocol(UIDocumentInstanceExports));
	class_addProtocol([UIDocument class], @protocol(UIDocumentClassExports));
	class_addProtocol([UIDocument class], @protocol(UIDocumentActivityContinuationCategoryInstanceExports));
	class_addProtocol([UIDocument class], @protocol(UIDocumentActivityContinuationCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIDocumentChangeDone"] = @0L;
	context[@"UIDocumentChangeUndone"] = @1L;
	context[@"UIDocumentChangeRedone"] = @2L;
	context[@"UIDocumentChangeCleared"] = @3L;

	context[@"UIDocumentSaveForCreating"] = @0L;
	context[@"UIDocumentSaveForOverwriting"] = @1L;

	context[@"UIDocumentStateNormal"] = @0UL;
	context[@"UIDocumentStateClosed"] = @1UL;
	context[@"UIDocumentStateInConflict"] = @2UL;
	context[@"UIDocumentStateSavingError"] = @4UL;
	context[@"UIDocumentStateEditingDisabled"] = @8UL;
	context[@"UIDocumentStateProgressAvailable"] = @16UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &NSUserActivityDocumentURLKey;
	if (p != NULL) context[@"NSUserActivityDocumentURLKey"] = NSUserActivityDocumentURLKey;
	p = (void*) &UIDocumentStateChangedNotification;
	if (p != NULL) context[@"UIDocumentStateChangedNotification"] = UIDocumentStateChangedNotification;
}
void load_UIKit_UIDocument_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
