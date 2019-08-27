#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSTextStorage_symbols(JSContext*);
@protocol NSTextStorageInstanceExports<JSExport>
@property (readonly,nonatomic) NSInteger changeInLength;
@property (readonly,nonatomic) BOOL fixesAttributesLazily;
@property (nonatomic,weak) id delegate;
@property (readonly,copy,nonatomic) NSArray * layoutManagers;
@property (readonly,nonatomic) NSTextStorageEditActions editedMask;
@property (readonly,nonatomic) NSRange editedRange;
-(void) edited: (NSTextStorageEditActions) editedMask range: (NSRange) editedRange changeInLength: (NSInteger) delta ;
-(void) addLayoutManager: (NSLayoutManager *) aLayoutManager ;
-(void) processEditing;
-(void) removeLayoutManager: (NSLayoutManager *) aLayoutManager ;
-(void) invalidateAttributesInRange: (NSRange) range ;
-(void) ensureAttributesAreFixedInRange: (NSRange) range ;
@end
@protocol NSTextStorageClassExports<JSExport>
@end
@protocol NSTextStorageDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) textStorage: (NSTextStorage *) textStorage willProcessEditing: (NSTextStorageEditActions) editedMask range: (NSRange) editedRange changeInLength: (NSInteger) delta ;
-(void) textStorage: (NSTextStorage *) textStorage didProcessEditing: (NSTextStorageEditActions) editedMask range: (NSRange) editedRange changeInLength: (NSInteger) delta ;
@end
@protocol NSTextStorageDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop