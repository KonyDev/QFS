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
-(id) jsinit
{
	id resultVal__;
	resultVal__ = [[self init] autorelease];
	return resultVal__;
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
	context[@"NSTextLayoutOrientationHorizontal"] = @0L;
	context[@"NSTextLayoutOrientationVertical"] = @1L;

	context[@"NSGlyphPropertyNull"] = @1L;
	context[@"NSGlyphPropertyControlCharacter"] = @2L;
	context[@"NSGlyphPropertyElastic"] = @4L;
	context[@"NSGlyphPropertyNonBaseCharacter"] = @8L;

	context[@"NSControlCharacterActionZeroAdvancement"] = @1L;
	context[@"NSControlCharacterActionWhitespace"] = @2L;
	context[@"NSControlCharacterActionHorizontalTab"] = @4L;
	context[@"NSControlCharacterActionLineBreak"] = @8L;
	context[@"NSControlCharacterActionParagraphBreak"] = @16L;
	context[@"NSControlCharacterActionContainerBreak"] = @32L;

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
