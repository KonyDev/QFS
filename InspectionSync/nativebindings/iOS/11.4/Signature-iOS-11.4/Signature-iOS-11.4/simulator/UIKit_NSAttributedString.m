#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation NSAttributedString (NSAttributedStringNSAttributedStringDocumentFormatsCategoryExports)
-(NSFileWrapper *) jsfileWrapperFromRange: (NSRange) range documentAttributes: (NSDictionary *) dict error: (JSValue *) error 
{
	NSError* error_ = nil;
	NSFileWrapper * resultVal__;
	resultVal__ = [self fileWrapperFromRange: range documentAttributes: dict error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
-(NSData *) jsdataFromRange: (NSRange) range documentAttributes: (NSDictionary *) dict error: (JSValue *) error 
{
	NSError* error_ = nil;
	NSData * resultVal__;
	resultVal__ = [self dataFromRange: range documentAttributes: dict error: &error_ ];
	if (error_ && [error isObject]) {
		error[@"error"] = error_;
	}
	return resultVal__;
}
@end
@implementation NSAttributedString (NSAttributedStringUINSItemProviderCategoryExports)
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object1 withObject: (id) object2 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object1 withObject: object2 ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector withObject: (id) object 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ withObject: object ];
	return resultVal__;
}
-(BOOL) jsrespondsToSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	BOOL resultVal__;
	resultVal__ = [self respondsToSelector: aSelector_ ];
	return resultVal__;
}
-(NSProgress *) jsloadDataWithTypeIdentifier: (NSString *) typeIdentifier forItemProviderCompletionHandler: (JSValue *) completionHandler 
{
	void (^ completionHandler_)(NSData * , NSError * ) = nil;
	if (!completionHandler.isUndefined) {
		completionHandler_ = ^void(NSData * arg0, NSError * arg1) {
			JSContext* __jsContext = completionHandler.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: (arg0 ? [JSValue valueWithObject: arg0 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: (arg1 ? [JSValue valueWithObject: arg1 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			callJSFunction(__jsContext, completionHandler, self, parameters);
		};
	}
	NSProgress * resultVal__;
	resultVal__ = [self loadDataWithTypeIdentifier: typeIdentifier forItemProviderCompletionHandler: completionHandler_ ];
	return resultVal__;
}
-(BOOL) jsisKindOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isKindOfClass: aClass_ ];
	return resultVal__;
}
-(id) jsperformSelector: (NSString *) aSelector 
{
	SEL aSelector_ = NSSelectorFromString(aSelector);
	id resultVal__;
	resultVal__ = [self performSelector: aSelector_ ];
	return resultVal__;
}
-(BOOL) jsisMemberOfClass: (JSValue *) aClass 
{
	Class aClass_ = objc_getClass([[aClass[@"className"] toString] cStringUsingEncoding: NSUTF8StringEncoding]);
	BOOL resultVal__;
	resultVal__ = [self isMemberOfClass: aClass_ ];
	return resultVal__;
}
+(id) jsobjectWithItemProviderData: (NSData *) data typeIdentifier: (NSString *) typeIdentifier error: (JSValue *) outError 
{
	NSError* outError_ = nil;
	id resultVal__;
	resultVal__ = [self objectWithItemProviderData: data typeIdentifier: typeIdentifier error: &outError_ ];
	if (outError_ && [outError isObject]) {
		outError[@"error"] = outError_;
	}
	return resultVal__;
}
-(JSValue *) getJsSuperclass
{
	return [JSValue valueWithObject: self.superclass inContext: [JSContext currentContext]];
}
@end
static void addProtocols()
{
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringNSAttributedStringDocumentFormatsCategoryInstanceExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringNSAttributedStringDocumentFormatsCategoryClassExports));
	class_addProtocol([NSMutableAttributedString class], @protocol(NSMutableAttributedStringNSAttributedStringAttributeFixingCategoryInstanceExports));
	class_addProtocol([NSMutableAttributedString class], @protocol(NSMutableAttributedStringNSAttributedStringAttributeFixingCategoryClassExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringNSAttributedStringKitAdditionsCategoryInstanceExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringNSAttributedStringKitAdditionsCategoryClassExports));
	class_addProtocol([NSMutableAttributedString class], @protocol(NSMutableAttributedStringNSDeprecatedKitAdditionsCategoryInstanceExports));
	class_addProtocol([NSMutableAttributedString class], @protocol(NSMutableAttributedStringNSDeprecatedKitAdditionsCategoryClassExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringNSDeprecatedKitAdditionsCategoryInstanceExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringNSDeprecatedKitAdditionsCategoryClassExports));
	class_addProtocol([NSMutableAttributedString class], @protocol(NSMutableAttributedStringNSMutableAttributedStringDocumentFormatsCategoryInstanceExports));
	class_addProtocol([NSMutableAttributedString class], @protocol(NSMutableAttributedStringNSMutableAttributedStringDocumentFormatsCategoryClassExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringUINSItemProviderCategoryInstanceExports));
	class_addProtocol([NSAttributedString class], @protocol(NSAttributedStringUINSItemProviderCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"NSUnderlineStyleNone"] = @0L;
	context[@"NSUnderlineStyleSingle"] = @1L;
	context[@"NSUnderlineStyleThick"] = @2L;
	context[@"NSUnderlineStyleDouble"] = @9L;
	context[@"NSUnderlinePatternSolid"] = @0L;
	context[@"NSUnderlinePatternDot"] = @256L;
	context[@"NSUnderlinePatternDash"] = @512L;
	context[@"NSUnderlinePatternDashDot"] = @768L;
	context[@"NSUnderlinePatternDashDotDot"] = @1024L;
	context[@"NSUnderlineByWord"] = @32768L;

	context[@"NSWritingDirectionEmbedding"] = @0L;
	context[@"NSWritingDirectionOverride"] = @2L;

	context[@"NSTextWritingDirectionEmbedding"] = @0L;
	context[@"NSTextWritingDirectionOverride"] = @2L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &NSDefaultAttributesDocumentAttribute;
	if (p != NULL) context[@"NSDefaultAttributesDocumentAttribute"] = NSDefaultAttributesDocumentAttribute;
	p = (void*) &NSHyphenationFactorDocumentAttribute;
	if (p != NULL) context[@"NSHyphenationFactorDocumentAttribute"] = NSHyphenationFactorDocumentAttribute;
	p = (void*) &NSStrokeColorAttributeName;
	if (p != NULL) context[@"NSStrokeColorAttributeName"] = NSStrokeColorAttributeName;
	p = (void*) &NSLigatureAttributeName;
	if (p != NULL) context[@"NSLigatureAttributeName"] = NSLigatureAttributeName;
	p = (void*) &NSVerticalGlyphFormAttributeName;
	if (p != NULL) context[@"NSVerticalGlyphFormAttributeName"] = NSVerticalGlyphFormAttributeName;
	p = (void*) &NSBackgroundColorDocumentAttribute;
	if (p != NULL) context[@"NSBackgroundColorDocumentAttribute"] = NSBackgroundColorDocumentAttribute;
	p = (void*) &NSTextLayoutSectionOrientation;
	if (p != NULL) context[@"NSTextLayoutSectionOrientation"] = NSTextLayoutSectionOrientation;
	p = (void*) &NSTextLayoutSectionRange;
	if (p != NULL) context[@"NSTextLayoutSectionRange"] = NSTextLayoutSectionRange;
	p = (void*) &NSKernAttributeName;
	if (p != NULL) context[@"NSKernAttributeName"] = NSKernAttributeName;
	p = (void*) &NSTextEffectLetterpressStyle;
	if (p != NULL) context[@"NSTextEffectLetterpressStyle"] = NSTextEffectLetterpressStyle;
	p = (void*) &NSWritingDirectionAttributeName;
	if (p != NULL) context[@"NSWritingDirectionAttributeName"] = NSWritingDirectionAttributeName;
	p = (void*) &NSRTFTextDocumentType;
	if (p != NULL) context[@"NSRTFTextDocumentType"] = NSRTFTextDocumentType;
	p = (void*) &NSPlainTextDocumentType;
	if (p != NULL) context[@"NSPlainTextDocumentType"] = NSPlainTextDocumentType;
	p = (void*) &NSDefaultAttributesDocumentOption;
	if (p != NULL) context[@"NSDefaultAttributesDocumentOption"] = NSDefaultAttributesDocumentOption;
	p = (void*) &NSStrikethroughColorAttributeName;
	if (p != NULL) context[@"NSStrikethroughColorAttributeName"] = NSStrikethroughColorAttributeName;
	p = (void*) &NSCharacterEncodingDocumentAttribute;
	if (p != NULL) context[@"NSCharacterEncodingDocumentAttribute"] = NSCharacterEncodingDocumentAttribute;
	p = (void*) &NSParagraphStyleAttributeName;
	if (p != NULL) context[@"NSParagraphStyleAttributeName"] = NSParagraphStyleAttributeName;
	p = (void*) &NSPaperMarginDocumentAttribute;
	if (p != NULL) context[@"NSPaperMarginDocumentAttribute"] = NSPaperMarginDocumentAttribute;
	p = (void*) &NSCharacterEncodingDocumentOption;
	if (p != NULL) context[@"NSCharacterEncodingDocumentOption"] = NSCharacterEncodingDocumentOption;
	p = (void*) &NSStrikethroughStyleAttributeName;
	if (p != NULL) context[@"NSStrikethroughStyleAttributeName"] = NSStrikethroughStyleAttributeName;
	p = (void*) &NSDefaultTabIntervalDocumentAttribute;
	if (p != NULL) context[@"NSDefaultTabIntervalDocumentAttribute"] = NSDefaultTabIntervalDocumentAttribute;
	p = (void*) &NSStrokeWidthAttributeName;
	if (p != NULL) context[@"NSStrokeWidthAttributeName"] = NSStrokeWidthAttributeName;
	p = (void*) &NSTextLayoutSectionsAttribute;
	if (p != NULL) context[@"NSTextLayoutSectionsAttribute"] = NSTextLayoutSectionsAttribute;
	p = (void*) &NSLinkAttributeName;
	if (p != NULL) context[@"NSLinkAttributeName"] = NSLinkAttributeName;
	p = (void*) &NSViewZoomDocumentAttribute;
	if (p != NULL) context[@"NSViewZoomDocumentAttribute"] = NSViewZoomDocumentAttribute;
	p = (void*) &NSBaselineOffsetAttributeName;
	if (p != NULL) context[@"NSBaselineOffsetAttributeName"] = NSBaselineOffsetAttributeName;
	p = (void*) &NSExpansionAttributeName;
	if (p != NULL) context[@"NSExpansionAttributeName"] = NSExpansionAttributeName;
	p = (void*) &NSUnderlineStyleAttributeName;
	if (p != NULL) context[@"NSUnderlineStyleAttributeName"] = NSUnderlineStyleAttributeName;
	p = (void*) &NSShadowAttributeName;
	if (p != NULL) context[@"NSShadowAttributeName"] = NSShadowAttributeName;
	p = (void*) &NSDocumentTypeDocumentAttribute;
	if (p != NULL) context[@"NSDocumentTypeDocumentAttribute"] = NSDocumentTypeDocumentAttribute;
	p = (void*) &NSTextEffectAttributeName;
	if (p != NULL) context[@"NSTextEffectAttributeName"] = NSTextEffectAttributeName;
	p = (void*) &NSViewModeDocumentAttribute;
	if (p != NULL) context[@"NSViewModeDocumentAttribute"] = NSViewModeDocumentAttribute;
	p = (void*) &NSRTFDTextDocumentType;
	if (p != NULL) context[@"NSRTFDTextDocumentType"] = NSRTFDTextDocumentType;
	p = (void*) &NSBackgroundColorAttributeName;
	if (p != NULL) context[@"NSBackgroundColorAttributeName"] = NSBackgroundColorAttributeName;
	p = (void*) &NSObliquenessAttributeName;
	if (p != NULL) context[@"NSObliquenessAttributeName"] = NSObliquenessAttributeName;
	p = (void*) &NSAttachmentAttributeName;
	if (p != NULL) context[@"NSAttachmentAttributeName"] = NSAttachmentAttributeName;
	p = (void*) &NSReadOnlyDocumentAttribute;
	if (p != NULL) context[@"NSReadOnlyDocumentAttribute"] = NSReadOnlyDocumentAttribute;
	p = (void*) &NSUnderlineColorAttributeName;
	if (p != NULL) context[@"NSUnderlineColorAttributeName"] = NSUnderlineColorAttributeName;
	p = (void*) &NSDocumentTypeDocumentOption;
	if (p != NULL) context[@"NSDocumentTypeDocumentOption"] = NSDocumentTypeDocumentOption;
	p = (void*) &NSFontAttributeName;
	if (p != NULL) context[@"NSFontAttributeName"] = NSFontAttributeName;
	p = (void*) &NSHTMLTextDocumentType;
	if (p != NULL) context[@"NSHTMLTextDocumentType"] = NSHTMLTextDocumentType;
	p = (void*) &NSForegroundColorAttributeName;
	if (p != NULL) context[@"NSForegroundColorAttributeName"] = NSForegroundColorAttributeName;
	p = (void*) &NSViewSizeDocumentAttribute;
	if (p != NULL) context[@"NSViewSizeDocumentAttribute"] = NSViewSizeDocumentAttribute;
	p = (void*) &NSPaperSizeDocumentAttribute;
	if (p != NULL) context[@"NSPaperSizeDocumentAttribute"] = NSPaperSizeDocumentAttribute;
}
void load_UIKit_NSAttributedString_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
