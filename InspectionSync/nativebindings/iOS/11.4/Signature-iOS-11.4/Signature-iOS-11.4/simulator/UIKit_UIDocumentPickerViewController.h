#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDocumentPickerViewController_symbols(JSContext*);
@protocol UIDocumentPickerViewControllerInstanceExports<JSExport>
@property (assign,nonatomic) BOOL allowsMultipleSelection;
@property (nonatomic,weak) id delegate;
@property (readonly,assign,nonatomic) UIDocumentPickerMode documentPickerMode;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithDocumentTypesInMode,
-(id) jsinitWithDocumentTypes: (NSArray *) allowedUTIs inMode: (UIDocumentPickerMode) mode );
JSExportAs(initWithURLsInMode,
-(id) jsinitWithURLs: (NSArray *) urls inMode: (UIDocumentPickerMode) mode );
JSExportAs(initWithURLInMode,
-(id) jsinitWithURL: (NSURL *) url inMode: (UIDocumentPickerMode) mode );
@end
@protocol UIDocumentPickerViewControllerClassExports<JSExport>
@end
@protocol UIDocumentPickerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) documentPicker: (UIDocumentPickerViewController *) controller didPickDocumentAtURL: (NSURL *) url ;
-(void) documentPickerWasCancelled: (UIDocumentPickerViewController *) controller ;
-(void) documentPicker: (UIDocumentPickerViewController *) controller didPickDocumentsAtURLs: (NSArray *) urls ;
@end
@protocol UIDocumentPickerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop