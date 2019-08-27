#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation NSLayoutManager (Exports)
-(void) jsenumerateEnclosingRectsForGlyphRange: (NSRange) glyphRange withinSelectedGlyphRange: (NSRange) selectedRange inTextContainer: (NSTextContainer *) textContainer usingBlock: (JSValue *) block 
{
	void (^ block_)(CGRect, BOOL * ) = nil;
	if (!block.isUndefined) {
		block_ = ^void(CGRect arg0, BOOL * arg1) {
			JSContext* __jsContext = block.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithRect: arg0 inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithObject: [BoolPointer boolPointerWithPtr: arg1] inContext: __jsContext]];
			callJSFunction(__jsContext, block, self, parameters);
		};
	}
	[self enumerateEnclosingRectsForGlyphRange: glyphRange withinSelectedGlyphRange: selectedRange inTextContainer: textContainer usingBlock: block_ ];
}
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
}
-(void) jsenumerateLineFragmentsForGlyphRange: (NSRange) glyphRange usingBlock: (JSValue *) block 
{
	void (^ block_)(CGRect, CGRect, NSTextContainer * , NSRange, BOOL * ) = nil;
	if (!block.isUndefined) {
		block_ = ^void(CGRect arg0, CGRect arg1, NSTextContainer * arg2, NSRange arg3, BOOL * arg4) {
			JSContext* __jsContext = block.context;
			NSMutableArray* parameters = [NSMutableArray array];
			[parameters addObject: [JSValue valueWithRect: arg0 inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithRect: arg1 inContext: __jsContext]];
			[parameters addObject: (arg2 ? [JSValue valueWithObject: arg2 inContext: __jsContext] : [JSValue valueWithUndefinedInContext: __jsContext])];
			[parameters addObject: [JSValue valueWithRange: arg3 inContext: __jsContext]];
			[parameters addObject: [JSValue valueWithObject: [BoolPointer boolPointerWithPtr: arg4] inContext: __jsContext]];
			callJSFunction(__jsContext, block, self, parameters);
		};
	}
	[self enumerateLineFragmentsForGlyphRange: glyphRange usingBlock: block_ ];
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([NSLayoutManager class], @protocol(NSLayoutManagerNSLayoutManagerDeprecatedCategoryInstanceExports));
	class_addProtocol([NSLayoutManager class], @protocol(NSLayoutManagerNSLayoutManagerDeprecatedCategoryClassExports));
	class_addProtocol([NSLayoutManager class], @protocol(NSLayoutManagerInstanceExports));
	class_addProtocol([NSLayoutManager class], @protocol(NSLayoutManagerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"NSTextLayoutOrientationHorizontal"] = @0;
	context[@"NSTextLayoutOrientationVertical"] = @1;

	context[@"NSGlyphPropertyNull"] = @1;
	context[@"NSGlyphPropertyControlCharacter"] = @2;
	context[@"NSGlyphPropertyElastic"] = @4;
	context[@"NSGlyphPropertyNonBaseCharacter"] = @8;

	context[@"NSControlCharacterActionZeroAdvancement"] = @1;
	context[@"NSControlCharacterActionWhitespace"] = @2;
	context[@"NSControlCharacterActionHorizontalTab"] = @4;
	context[@"NSControlCharacterActionLineBreak"] = @8;
	context[@"NSControlCharacterActionParagraphBreak"] = @16;
	context[@"NSControlCharacterActionContainerBreak"] = @32;

	context[@"NSControlCharacterZeroAdvancementAction"] = @1;
	context[@"NSControlCharacterWhitespaceAction"] = @2;
	context[@"NSControlCharacterHorizontalTabAction"] = @4;
	context[@"NSControlCharacterLineBreakAction"] = @8;
	context[@"NSControlCharacterParagraphBreakAction"] = @16;
	context[@"NSControlCharacterContainerBreakAction"] = @32;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_NSLayoutManagerProtocols()
{
	(void)@protocol(NSTextLayoutOrientationProvider);
	(void)@protocol(NSLayoutManagerDelegate);
}
void load_UIKit_NSLayoutManager_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
